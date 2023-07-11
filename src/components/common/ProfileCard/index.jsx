import React,{useState,useMemo} from 'react'
import "./index.scss"
import ProfileEdit from '../ProfileEdit'
import { editProfileData, getSingleStatus, getSingleUser } from '../../../api/FirestoreAPIs';
import PostCard from '../PostCard'
import circleIcon from '../../../pictures/circleIcon.png';
import { BiPencil } from 'react-icons/bi';
import { uploadImageAPI } from '../../../api/ImageUpload';
import { useLocation } from 'react-router-dom';

function ProfileCard({currentUser,onEdit}) {
  let location = useLocation();
  const [AllStatuses,setAllStatus]=useState([]);
  const [currentImage, setCurrentImage] = useState({});
  const [imageLink, setImageLink] = useState('');
  let isProfilePic = false;
  const getImage = (event)=>{
    //uploadImageAPI(event.target.files[0]);
    setCurrentImage(event.target.files[0]);
  } 
  const uploadImage = ()=>{
   // console.log(currentUser.userID);
    uploadImageAPI(currentImage, currentUser.userID);
  }
  
  useMemo(()=>{
    if(location?.state?.is){
      getSingleStatus(setAllStatus, location?.state?.id);
    }

    if(location?.state?.email){
      getSingleUser(setCurrentProfile, location?.state?.email);
    }
  },[]);

  // useEffect(()=>{
  //   editProfileData(currentUser?.id, imageLink);
  // })

  return (
    <div className='profile-container'>
    <div className="profile-card">
      <div className='bgPicture'>
        
        <div className='profilePicture'>
          <img className='profilePicture-img' src={currentUser?.imageLink} alt="profile-image"/>
        </div>
        <div className="edit-btn">
            <BiPencil onClick={onEdit} className='edit'/>
        </div>
      </div>
        
        <div className="profile-info">
          <div className="left-info">
            <input type='file' onChange={getImage}/>
            <button onClick={uploadImage}>Upload</button>
            <h3 className="username">{currentUser.name}</h3>
            <p className="heading">{currentUser.headline}</p>
            <p>{currentUser.location}</p>
          </div>
          <div className="right-info">
            <p className="college">{currentUser.college}</p>
            <p className="company">{currentUser.company}</p>
          </div>
        </div>     
    </div>
    <div>
      {AllStatuses.filter((item)=>{
        return item.userEmail==JSON.parse(localStorage.getItem("user"))?.email;
      }).map((posts)=>{
        return (<div key={posts.id}>
          <PostCard posts={posts}/>
          </div>)

      })}
    </div>
    </div>
  )
}

export default ProfileCard