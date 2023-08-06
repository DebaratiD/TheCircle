import React, { useEffect, useState } from 'react'
import "./index.scss"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { getAllUsers } from '../../../api/FirestoreAPIs'
function SearchUser({setIsSearch,setsearchInput}) {
  
  return (
    <div className='search-user'>
        <input type="text" name="search" placeholder='Search...' onChange={(event)=>setsearchInput(event.target.value)} />

    <AiOutlineCloseCircle
    className='close-icon'
    size={20}
    onClick={()=> {
        setIsSearch(false);
        setsearchInput("");
    }}
    />

    
    </div>
  )
}

export default SearchUser