import React, { useMemo } from 'react'
import HomeComponent from './HomeComponent'
import TopNavbar from './common/TopNavbar'

export default function HomeLayoutComponent({currentUser}) {
  return (
    <>
        <TopNavbar/>
        <HomeComponent currentUser={currentUser}/>
    </>
    
  )
}
