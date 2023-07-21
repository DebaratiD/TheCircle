import { React, useState ,useEffect} from 'react'
import LinkedInMini from '../../../pictures/circleIcon.png'
import { AiOutlineSearch, AiTwotoneHome } from 'react-icons/ai';
import { HiUsers,HiBriefcase } from 'react-icons/hi'
import  { BsFillChatDotsFill, BsFillGrid3X3GapFill, BsFillPersonFill, BsFillBellFill } from 'react-icons/bs'
import UserInfoComponent from '../../../components/UserInfoComponent';
import '../../../Sass/TopNavbar.scss';
import { useNavigate } from 'react-router-dom';
import userIcon from '../../../pictures/user.jpg'
import ProfilePopup from '../ProfilePopup/index'
import SearchUser from '../SearchUser/index'
import {getAllUsers} from "../../../api/FirestoreAPIs"
import { FilterNoneRounded } from '@mui/icons-material';

export default function TopNavbar({currentUser}) {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")));
  const [isSearch,setIsSearch]=useState(false);
  const [searchInput,setsearchInput]=useState("");
  const [filteredUsers,setFilteredUsers]=useState([]);

    let navigate=useNavigate();
    const goToRoute=(route)=>{
      navigate(route);
      
    }
    const [users,setUsers]=useState("")
    useEffect(()=>{
        getAllUsers(setUsers);
    },[])

    const openUser=(user)=>{navigate('/profile',{
      state:{id:user?.userID,email:user.email},
    })}

    let [showUserInfo, setShowUserInfo] = useState(false); 
    let divelem = document.getElementById('user-div');
    const UserIcon=user?.photoURL!=null?(user?.photoURL):userIcon;
    const handleSearch = ()=>{
      if(searchInput !== ''){
      let searched= users.filter((user)=>{
        return Object.values(user).join("").toLowerCase().includes(searchInput.toLowerCase())
      });
      setFilteredUsers(searched);
      
    }else{
      setFilteredUsers(users);
      
    }
    }
    useEffect(()=>{
    let debounced= setTimeout(()=>{
      handleSearch();
    },1000)
    return () => clearTimeout(debounced);
  },[searchInput])
    const toggle = () => {       
        setShowUserInfo(!showUserInfo);
    }
  return (
    <div className='top-navbar'>
        <div className='react-icons'>
            <img src={LinkedInMini} className='linkedinlogomini' title='LinkedIn'/>
            <AiOutlineSearch size={30} className='react-icon' onClick={()=>{setIsSearch(true)}}/>
            <div className="">{isSearch?<SearchUser className='search-icon' setIsSearch={setIsSearch} setsearchInput={setsearchInput}/>:<></>}</div>
            {searchInput.length === 0 ?
            (<></>):
            (<div className="search-results">  
            {filteredUsers.length===0?(
              <div className="search-inner">
              No Result found...
              </div>
            ):(
            filteredUsers.map((user)=>(
              <div className="search-inner" onClick={()=> openUser(user)}>
                <img src={user.imageLink}/>
                <p className='name'>{user.name}</p>
              </div>
            )))}
            </div>)}

           
            <AiTwotoneHome  size={30} className='react-icon' onClick={()=>{goToRoute('/home')}}/>
            <HiUsers  size={30} className='react-icon' onClick={()=>{goToRoute('/connections')}}/>
            <HiBriefcase size={30} className='react-icon'/>
            <BsFillChatDotsFill  size={30} className='react-icon' onClick={()=>{goToRoute('/chat')}}/>
        </div>
        <div className='right-options'>
            <BsFillGrid3X3GapFill size={30} className='react-icon'/>
            <BsFillBellFill size={30} className='react-icon'/>
           
            <div className="sidebar-header-img">
              <img className='userLogo' src={currentUser?.imageLink} alt="user" onClick={toggle}/>
              </div>
            {/* {showUserInfo && <UserInfoComponent/>} */}
            <div className='profile-menu'>
            {showUserInfo && <ProfilePopup/>}
            </div>
           
            
        </div>
    </div>
  )
}