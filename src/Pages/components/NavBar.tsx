import React ,{useEffect} from 'react'
import {Tabs} from 'antd'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate()


    const onChange = (key: string) => {
        navigate(`${key}`)    
    };

const items= [
  {
    key: '/',
    label: 'Home',
  },
  {
    key: '/history',
    label: 'History',
  }
];

  return (
    <div>
        <Tabs defaultActiveKey='/' items={items} onChange={onChange} centered={true} size="large" tabBarGutter={80} />
    </div>
  )
}

export default NavBar