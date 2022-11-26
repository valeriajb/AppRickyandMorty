import React from 'react'
import { FaFacebookSquare,FaInstagram,FaYoutube } from "react-icons/fa";
import './ListSocial.css'

function ListSocial() {
  return (
    <div className='social-container'>
        <FaFacebookSquare className='fa-brands'/>
        <FaInstagram className='fa-brands'/>
        <FaYoutube className='fa-brands'/>
    </div>
  )
}

export default ListSocial
