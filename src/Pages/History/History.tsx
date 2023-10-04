import React, { useEffect, useState } from 'react'
import styles from './History.module.css'
import { Table } from 'antd'
import { divide } from 'lodash'
import UserCard from '../components/UserCard'
import _ from 'lodash'

const History = () => {
  const [history,setHistory] = useState([])

  useEffect(()=>{
      let History:any =localStorage.getItem("gitHubhistory")
      History = JSON.parse(History);

      if(History){
        setHistory(History)
      }
  },[])

  const handleClearHistory = ()=>{
    localStorage.setItem("gitHubhistory",JSON.stringify([]))
    setHistory([])
  }

  return (
    <div>
      <div className={styles.title}>Your Search History</div>

      <button className={styles.clearHistory} onClick={handleClearHistory}>Clear History</button>

      <div className={styles.tableContainer}>

        <Table dataSource={history} bordered={true}>
            <Table.Column title="Search Term" dataIndex="searchTerm" key="Term"/>
            
            <Table.Column 
                title="Search Results" 
                dataIndex="data" 
                key="Results"
                render={(data)=>{
                  return (
                    // <UserCard user={data}/>
                    <div>
                      {!_.isEmpty(data) ? <UserCard user={data}/> : <div style={{
                        color:"rgb(107, 119, 107)"
                      }}>Search result not found</div>}
                    </div>
                  )
                }}  
                />
        </Table>
        
      </div>
    </div>
  )
}

export default History