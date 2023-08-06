import React from 'react';
import "../Sass/HomeComponent.scss";
import PostStatus from './common/PostUpdate/index';
import { getCurrentUser } from '../api/FirestoreAPIs';

export default function HomeComponent({currentUser}) {
  return (
    <div className='home-container'>
    <PostStatus currentUser ={currentUser}/>
    </div>
  )
}
