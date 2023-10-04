import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import NavBar from './Pages/components/NavBar';
import History from './Pages/History/History';
function App() {
  return (
    <div className='App'>
      {/* <SideDrawer/> */}
      <NavBar/>
      <div style={{width:"100%"}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/history' element={<History/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
