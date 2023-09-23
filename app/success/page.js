'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill}  from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/Stateagus'
import { runFireworks } from '@/ekomerse/schemas/utils'

function Succes() {
    const {setCartItems,totalPrice,setTotalPrice,setTotalQuantities} = useStateContext()

    const [order,setOrder] = useState(null)

    useEffect(() =>{
          localStorage.clear()
          setCartItems([])
          setTotalPrice(0)
          setTotalQuantities(0)
          runFireworks()
    },[])
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>Thank you for the order</h2>
            <p className='email-msg'>Check Your Email Inbox for the reciept</p>
            <p className='description'>
              if you have any question pleaase email 
              <a className='email' href='mailto:agusputrawan@gmail.com'>
              agusputrawan@gmail.com
              </a>
            </p>
            <Link href='/'>
                  <button type="button" width="300px" className='btn'>
                           Continue Shopping
                  </button>
            </Link>
        </div>
    </div>
  )
}

export default Succes