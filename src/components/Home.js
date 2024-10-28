import React, { useEffect } from 'react'
import './style.css'
import { useRef } from 'react'
import scrollContext from './Context.js/CreateContext'
import { useContext } from 'react'
const Home = () => {
    const {setHome}= useContext(scrollContext)
      const homeref=useRef()
    
       useEffect(()=>{
        let value= homeref.current
         setHome(value)

         // eslint-disable-next-line
       },[])
    
  return (
     
    
    <div ref={homeref} className='container'>
        
      <div className="detail">
        <span className='detail-1'>We Ensure Better Education For Better Future </span>
        <span className='detail-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ipsam eligendi, autem dolore neque nostrum voluptate iure odio nobis ex ea iusto facilis molestias vel iste culpa voluptatem. Ab. Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <button className="btn2">Explore more <i className="fa-solid fa-arrow-right"></i></button>
       </div>
    </div>
    
  )
}

export default Home
