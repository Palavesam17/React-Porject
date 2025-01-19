import React from 'react'
import LeftSidebar from './LeftSidebar'
import MainContent from './MainContent'
import './Css/Style.css';

const MainPage = () => {
  return (
    <div className='MainpageSection'>
        <div className='sidebar'>
            <LeftSidebar />
        </div>
        <div className='content'>
            <MainContent />
        </div>
    </div>
  )
}

export default MainPage