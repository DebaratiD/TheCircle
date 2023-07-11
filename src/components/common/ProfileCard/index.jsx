import React,{useState,useMemo} from 'react'
import "./index.scss"
import ProfileEdit from '../ProfileEdit'
import { editProfileData, getSingleStatus, getSingleUser } from '../../../api/FirestoreAPIs';
import { HiOutlinePencil } from "react-icons/hi";
import PostCard from '../PostCard'
import circleIcon from '../../../pictures/circleIcon.png';
import { BiPencil } from 'react-icons/bi';
import { uploadImageAPI } from '../../../api/ImageUpload';
import { useLocation } from 'react-router-dom';

function ProfileCard({currentUser,onEdit}) {
  let location = useLocation();
  const [AllStatuses,setAllStatus]=useState([]);
  const [currentImage, setCurrentImage] = useState({});
  const [currentProfile, setCurrentProfile] = useState({});
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
            <h3 className="username">{Object.values(currentProfile).length==0?
            currentUser.name:currentProfile[0]?.name}</h3>
            <p className="heading">
            {Object.values(currentProfile).length==0?
            currentUser.headline:currentProfile[0]?.headline}
            </p>
            <p className="location">{Object.values(currentProfile).length==0?
            `${currentUser.city},${currentUser.country}`:`${currentProfile[0]?.city},${currentProfile[0]?.country}`}
            </p>
            <a className="website" target="_blank" href=
            {Object.values(currentProfile).length==0?
            `${currentUser.website}`:currentProfile[0]?.website}>
              {Object.values(currentProfile).length==0?
            `${currentUser.website}`:currentProfile[0]?.website}
            </a>
          </div>
          <div className="right-info">
            <p className="college">
            {Object.values(currentProfile).length==0?
            currentUser.college:currentProfile[0]?.college}</p>
            <p className="company">{Object.values(currentProfile).length==0?
            currentUser.company:currentProfile[0]?.company}</p>
          </div>
         
        </div>    
        <p className="about-me">
            {Object.values(currentProfile).length==0?
            currentUser.aboutMe:currentProfile[0]?.aboutMe}</p>
         <p className="skills">
          <span className="skill-label">Skills</span>:&nbsp;
            {Object.values(currentProfile).length==0?
            currentUser.skills:currentProfile[0]?.skills}</p>
    </div>
    <div>
      {AllStatuses.map((posts)=>{
        return (<div key={posts.id}>
          <PostCard posts={posts}/>
          </div>)

      })}
    </div>
    </div>
  )
}

export default ProfileCard