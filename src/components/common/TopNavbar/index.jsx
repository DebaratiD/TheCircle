import { React, useState } from 'react'
import LinkedInMini from '../../../pictures/circleIcon.png'
import { AiOutlineSearch, AiTwotoneHome } from 'react-icons/ai';
import { HiUsers,HiBriefcase } from 'react-icons/hi'
import  { BsFillChatDotsFill, BsFillGrid3X3GapFill, BsFillPersonFill, BsFillBellFill } from 'react-icons/bs'
import UserInfoComponent from '../../../components/UserInfoComponent';
import '../../../Sass/TopNavbar.scss';
import { useNavigate } from 'react-router-dom';
import userIcon from '../../../pictures/user.jpg'

export default function TopNavbar() {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")));
    let navigate=useNavigate();
    const goToRoute=(route)=>{
      navigate(route);
    }

    let [showUserInfo, setShowUserInfo] = useState(false);
    
    let divelem = document.getElementById('user-div');
    const UserIcon=user?.photoURL!=null?user?.photoURL:userIcon;
    
    const toggle = () => {       
        setShowUserInfo(!showUserInfo);
    }
  return (
    <div className='top-navbar'>
        <div className='react-icons'>
            <img src={LinkedInMini} className='linkedinlogomini' title='LinkedIn'/>
            <AiOutlineSearch size={30} className='react-icon'/>
            <input type="text" name="search" placeholder='Search...' /> 
            <AiTwotoneHome  size={30} className='react-icon' onClick={()=>{goToRoute('/home')}}/>
            <HiUsers  size={30} className='react-icon'/>
            <HiBriefcase size={30} className='react-icon'/>
            <BsFillChatDotsFill  size={30} className='react-icon' onClick={()=>{goToRoute('/chat')}}/>
        </div>
        <div className='right-options'>
            <BsFillGrid3X3GapFill size={30} className='react-icon'/>
            <BsFillBellFill size={30} className='react-icon'/>
            <div className="sidebar-header-img">
              <img src={UserIcon} alt="" onClick={toggle}/>
            
            </div>
            {showUserInfo && <UserInfoComponent/>}
        </div>
    </div>
  )
}