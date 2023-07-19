import React, { useMemo, useState } from 'react'
import "./index.scss"
import {AiOutlineLike,AiFillLike,AiOutlineComment} from "react-icons/ai"
import {getcomments, likePost, postComments} from '../../../api/FirestoreAPIs'
import {getLikesByUser,getCurrentUser} from '../../../api/FirestoreAPIs'
import {getCurrentTimeStamp} from '../../../helpers/useMoment'
import { useNavigate } from 'react-router-dom';

function LikeButton({userID,postID}) {
    let navigate=useNavigate();
    const [likescount,setLikesCount]=useState(0);
    const [showCommentBox,setShowCommentBox]=useState(false);
    const [comment,setComment]=useState("");
    const [postedComment,setPostedComment]=useState("");
    const [liked,setLiked]=useState(false);
    const [currentUser,setCurrentUser]=useState({});
    const handleLike=()=>{
         
         setLiked(!liked);
         
        likePost(userID,postID,liked);
        
    };
    const getcomment=(event)=>{
      setComment(event.target.value);
    }
    const addComment=()=>{
      if(comment!=""){
      postComments(postID,comment,getCurrentTimeStamp("LLL"),userID,currentUser.name,currentUser.email);}
      setComment("");
     
      
    }
    useMemo(()=>{
        getCurrentUser(setCurrentUser);
        getLikesByUser(userID,postID,setLiked,setLikesCount);
        getcomments(postID,setPostedComment);
    },[]);
    
  return (
    <div className='like-container'>
         <p> {likescount} People liked this post</p>
         <div className='hr-line'><hr/></div>
        <div className="likes-comments">
          <div className='likes-inner' onClick={handleLike}>
            <div className='like-btn'>{liked?<AiFillLike size={20} />:<AiOutlineLike size={20} />}</div>
            <p>{liked ? "Liked" : "Like"} </p>
          </div>   
          <div className='comments-inner' onClick={()=>setShowCommentBox(!showCommentBox)}>
            <AiOutlineComment className='comment-btn' size={20} /> 
          </div> 
          
        </div>
       {showCommentBox? (<>
        <input onChange={getcomment}  placeholder='Add a comment' className='comment-input' value={comment} />   
        <button onClick={addComment} className='add-comment-btn'>Add Comment</button>
        {
         postedComment.length>0?(
         postedComment.map((comment) => {
          return(
            <div className='All-comments'>
                <p className='name' onClick={()=>navigate('/profile',{
        state:{id:comment.userID,email:comment.email}},)}>{comment.name}</p>
                <p className='comment'>{comment.comment}</p>
                {/* <p>•</p> */}
                <p className='timestamp'>{comment.timestamp}</p>
            </div>

          )
         })

          ):(<></>)
        }
        </> ):(<></> ) }
    </div>
  )
}

export default LikeButton