import { React, useState } from 'react'
import LinkedInMini from '../../pictures/In-Blue-72.png'
import { AiOutlineSearch, AiTwotoneHome } from 'react-icons/ai';
import { HiUsers,HiBriefcase } from 'react-icons/hi'
import  { BsFillChatDotsFill, BsFillGrid3X3GapFill, BsFillPersonFill, BsFillBellFill } from 'react-icons/bs'
import UserInfoComponent from '../UserInfoComponent';
import '../../Sass/TopNavbar.scss';

export default function TopNavbar() {
    let [showUserInfo, setShowUserInfo] = useState(false);
    
    let divelem = document.getElementById('user-div');

    const toggle = () => {       
        setShowUserInfo(!showUserInfo);
    }
  return (
    <div className='top-navbar'>
        <div className='react-icons'>
            <img src={LinkedInMini} className='linkedinlogomini' title='LinkedIn'/>
            <AiOutlineSearch size={24} className='react-icon'/>
            <AiTwotoneHome  size={24} className='react-icon'/>
            <HiUsers  size={24} className='react-icon'/>
            <HiBriefcase size={24} className='react-icon'/>
            <BsFillChatDotsFill  size={24} className='react-icon'/>
        </div>
        <div className='right-options'>
            <BsFillGrid3X3GapFill size={24} className='react-icon'/>
            <BsFillBellFill size={24} className='react-icon'/>
            <span className='profile-outline' onClick={toggle}>
                <BsFillPersonFill size={20} className='react-icon'/>
            </span>
            {showUserInfo && <UserInfoComponent/>}
        </div>
    </div>
  )
}