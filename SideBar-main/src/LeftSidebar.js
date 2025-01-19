import React from 'react'
import {Link} from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div>
        <h2 className='sidebarheader'>Sidebar</h2><hr></hr>
        <div className='MenuList'>
            <Link to={'/'}>Home</Link>
            <Link to={'page1'}>Page-1</Link>
            <Link to={'page2'}>Page-2</Link>
            <Link to={'page3'}>Page-3</Link>
            <Link to={'page4'}>Page-4</Link>
            <Link to={'page5'}>Page-5</Link>
        </div>
    </div>
  )
}

export default LeftSidebar