import React from 'react'
import './style.css'
import scrollContext from './Context.js/CreateContext'
import { useContext, useRef, useEffect } from 'react'
const Campus = () => {
    const {setcampus}= useContext(scrollContext)
    const campusref= useRef()

    useEffect(()=>{
        let value= campusref.current
     setcampus(value)
     // eslint-disable-next-line
    },[])
  return (
    <div ref={campusref} className='container2'>
      <span className='g-1'>GALLERY</span>
      <h1 className='g-2'>Campus Photos</h1>
      <div className="container2-images">
        <img className='campus-img' src="https://media.istockphoto.com/id/2122148349/photo/writing-an-exam-at-the-university.webp?a=1&b=1&s=612x612&w=0&k=20&c=fJNH1q1N1NJ6IbQTvftt_k6W1ZKOSp10KCSNHnwiTRc=" alt="" srcSet="" />
        <img className='campus-img' src="https://media.istockphoto.com/id/1770996562/photo/group-of-students-sitting-outside-university-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=nf7ShLpsYUMGU4yx-S4nApKS-GzcW973QDtTAOmKzho=" alt="" srcSet="" />
        <img className='campus-img' src="https://media.istockphoto.com/id/2022278899/photo/student-friendship-concept-with-diverse-classmate-friends-sitting-on-campus-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=FecJrOXsONPxjWzJ2uXvnX9VuM3p5sh43RH3D-UhCPc=" alt="" srcSet="" />
        <img className='campus-img' src="https://plus.unsplash.com/premium_photo-1693138543070-51ad7383b310?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D" alt="" srcSet="" />
      </div>
      <button className='campus-btn'>See more here <i className="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}

export default Campus
