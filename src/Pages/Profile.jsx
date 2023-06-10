import React from 'react'
import ProfileComponent from '../components/ProfileComponent'

export default function Profile() {
    let username = JSON.parse(localStorage.getItem("user"))?.fullname;
  return (
    <div>Hi {username}!</div>
  )
}
