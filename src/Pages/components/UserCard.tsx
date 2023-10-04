import React from 'react'
import styles from './../Home/Home.module.css'
// import { useSelector } from 'react-redux'
// import { seleteHome } from '../Home/Home.slice'
import _ from 'lodash'

const UserCard = ({user}:{user:any}) => {
    // const {user} = useSelector(seleteHome);

  return (
       
        <div className={styles.cardContainer}>    
            <div className={styles.userImage}>
                <div className={styles.userimageTitle}>User Image</div>
                <div className={styles.userImagebox}>
                    <img src={user?.avatar_url} alt='user'/>
                </div>
            </div>
            <div className={styles.userName}>
                <div className={styles.userimageTitle}>GitHub User Name</div>
                <div>{user?.name} {user?.html_url?<span><a href={user?.html_url} target='_blank' rel="noreferrer">Github</a></span>:""}</div>
            </div>
        </div>

  )
}

export default UserCard