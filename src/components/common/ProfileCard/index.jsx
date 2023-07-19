import React,{useState,useMemo} from 'react'
import "./index.scss"
import ProfileEdit from '../ProfileEdit'
import { editProfileData, getSingleStatus, getSingleUser } from '../../../api/FirestoreAPIs';
import PostCard from '../PostCard'
import { BiPencil } from 'react-icons/bi';
import { HiOutlinePencil} from 'react-icons/hi';
import { uploadImageAPI } from '../../../api/ImageUpload';
import { useLocation } from 'react-router-dom';
import FileUploadModal from '../FileUploadModal';

function ProfileCard({currentUser,onEdit}) {
  let location = useLocation();
  const [AllStatuses,setAllStatus]=useState([]);
  const [currentImage, setCurrentImage] = useState({});
  const [currentProfile, setCurrentProfile] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadInput, setUploadInput] = useState(true);
 
  const getImage = (event)=>{
    setCurrentImage(event.target.files[0]);
  } 
  const uploadImage = ()=>{
    let userId=Object.values(currentProfile).length==0?currentUser.userID:currentProfile[0]?.userID
    uploadImageAPI(currentImage, userId, setModalOpen, setProgress, setCurrentImage, setUploadInput);
  }
  const [edit,setEdit]=useState(true);

  useMemo(()=>{
    if(location?.state?.id){
      getSingleStatus(setAllStatus, location?.state?.id);
    }

    if(location?.state?.email){
      getSingleUser(setCurrentProfile,location?.state?.email);
      
    }
   
  },[]);

 


  return (
  <>
    <FileUploadModal 
    modalOpen={modalOpen} 
    setModalOpen={setModalOpen}
    getImage={getImage}
    uploadImage={uploadImage}
    currentImage={currentImage}
    progress={progress}
    uploadInput={uploadInput}
    setUploadInput={setUploadInput}/>

    <div className='profile-container'>
      <div className="profile-card">
          <div className='bgPicture'>       
                  <div className='profilePicture' onClick={()=>setModalOpen(true)}>
                    <img className='profilePicture-img' src={Object.values(currentProfile).length==0?currentUser.imageLink:currentProfile[0]?.imageLink} alt="profile-image"/>
                  </div>
                  <div className="edit-btn">      
                      <HiOutlinePencil size={20} className='edit-icon' onClick={onEdit}/>
                  </div>           
          </div>
        
         <div className="profile-info">
          <div className="left-info">
           
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
            currentUser.aboutMe:currentProfile[0]?.aboutMe}
          </p>
          <p className="skills">
            <span className="skill-label">Skills</span>:&nbsp;
            {Object.values(currentProfile).length==0?
            currentUser.skills:currentProfile[0]?.skills}
          </p>
         </div>
         <div className='self-post'>
          {AllStatuses.map((posts)=>{
           return (<div key={posts.id}>
            <PostCard posts={posts}/>
          </div>)

          })}
         </div>
      </div>
  </>
  )
}

export default ProfileCard