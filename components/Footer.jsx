import React from 'react'
import { AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer-container'>
       <p>2020 HEADPHONE ALL Rigths Reserved</p>
       <p className='icons'>
            <AiFillInstagram/>
            <AiOutlineTwitter/>
       </p>
    </div>
  )
}

export default Footer