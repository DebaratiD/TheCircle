import React, { useMemo, useState } from 'react'
import "./index.scss"
import {AiOutlineLike,AiFillLike} from "react-icons/ai"
import {likePost} from '../../../api/FirestoreAPIs'
import {getLikesByUser} from '../../../api/FirestoreAPIs'
function LikeButton({userID,postID}) {
    const [likescount,setLikesCount]=useState(0);
    const [liked,setLiked]=useState(false);
    const handleLike=()=>{
        likePost(userID,postID,liked);
    };
    useMemo(()=>{
        getLikesByUser(userID,postID,setLiked,setLikesCount);
    },[]);
  return (
    <div className='like-container'onClick={handleLike}>
         <p> {likescount} People liked this post</p>
         <div className='hr-line'>
            <hr/>
         </div>
         <div className='likes-inner'>
         <div className='like-btn'>{liked?<AiFillLike size={20} />:<AiOutlineLike size={20} />}</div>
         <p>{liked ? "Liked" : "Like"} </p>
         </div>       
        
       
        
       
       
        
    </div>
  )
}

export default LikeButton