import React from 'react'
import './index.scss'
function PostCard({posts}) {
  return (
    <div className='post-card'>
        <p className='timestamp'>{posts.timeStamp}</p>
        <p className='status'>{posts.status}</p></div>
  )
}

export default PostCard