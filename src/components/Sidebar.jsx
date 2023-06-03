import React from 'react'
import "../Sass/sidebar.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SearchIcon from '@mui/icons-material/Search';
import UserProfile from './UserProfile';
import userIcon from '../pictures/user.jpg'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-header">
            <div className="sidebar-header-img">
                <img src={userIcon} alt="" />
            
            </div>
            <div className="sidebar-header-btn">
                <TollIcon/>
                <InsertCommentIcon/>
                <MoreHorizIcon/>
                
            </div>
        </div>
        <div className="sidebar-search">
            <div className="sidebar-search-input">
                <SearchIcon/>
                <input type="text" name="search" placeholder='Search...' />
            </div>
        </div>
        <div className="sidebar-chatlist">
            <UserProfile name="John Cena" photoURL={userIcon}/>
            <UserProfile name="John Cena" photoURL={userIcon}/>
            

        </div>
        
    </div>
  )
}

export default Sidebar