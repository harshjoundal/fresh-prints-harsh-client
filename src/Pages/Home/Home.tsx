import React, { useState } from 'react'
import styles from './Home.module.css'
import {  Input, Spin, message } from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import UserCard from '../components/UserCard'
import { useAppDispatch } from '../../Store/Hooks'
import { getGithubUser, seleteHome } from './Home.slice'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const Home = () => {
    const dispatch = useAppDispatch();
    const [Searchinput,setInput] = useState("")
    const {user,loading} = useSelector(seleteHome)

    const handleSearch = ()=>{
        if(Searchinput == ""){
            message.warning("Please enter the name")
            return;
        }
        let userName = Searchinput.split(' ').join("");
        dispatch(getGithubUser(userName))
        setInput("")
    }


  return (
    <div  className={styles.mainContainer}>
        <div className={styles.title}>Search GitHub User</div>
        <div className={styles.container}>
            <div className={styles.searchComponent}>
                <Input value={Searchinput} onChange={(e)=>{setInput(e.target.value)}} size="large" placeholder="Search" 
                prefix={loading?<Spin size='small'/>:<SearchOutlined />} className={styles.input_bar} onPressEnter={()=>{
                    handleSearch()
                }}
                />
                <button className={styles.searchButton} onClick={handleSearch}>Search</button>
            </div>
            <div className={styles.resultComponent}>
                <p>Search Results</p>
                <div>
                    {!_.isEmpty(user) ? <UserCard user={user}/> : <div>No user found!</div>}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home