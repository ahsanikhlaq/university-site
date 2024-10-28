import React, { useEffect } from 'react'
import './style.css'
//import video from './3722209-hd_1920_1080_25fps.mp4'
import scrollContext from './Context.js/CreateContext'
import { useContext, useRef } from 'react'
const Programe = () => {
    const {setprograme, setabout, setdisplay, video }=useContext(scrollContext)
    //const [display, setdisplay]= useState('none')
    //const [display2, setdisplay2]= useState('flex')
    const Programeref= useRef()
    const Programe2ref= useRef()
    //const videoRef = useRef()
               
    useEffect(()=>{
     
     let value= Programeref.current
     let value2 = Programe2ref.current
     setprograme(value)
     setabout(value2)
     // eslint-disable-next-line
    },[])
    useEffect(()=>{
     
      
      let value2 = Programe2ref.current
      
      setabout(value2)
      // eslint-disable-next-line
     },[])
 
      const play=()=>{
        setdisplay('flex')
        video.play()          
      }
  
  return (
    <div ref={Programeref} className='container1'>
      <div  className="programe">
      <span  className='h-1'>OUR PROGRAME</span>
      <h1 className='h-2'>What We Offer</h1>
      <div className="container1-images">
        <div className="images1">
         
        <div className='s-1'>
        <div className='logo'><i className="fa-solid fa-2x fa-book-open-reader"></i></div>
        <div className='programe'>Master Programe</div>
        </div>
        </div>
        <div className="images2">
          
        <div className='s-2'>
        <div className='logo'><i className="fa-solid fa-2x fa-book-open"></i></div>
        <div className='programe'>M-Phill Programe</div>
        </div>
        </div>
        <div className="images3">
        <div className='s-3'>
        <div className='logo'><i className="fa-solid fa-2x fa-graduation-cap"></i></div>
        <div className='programe'>PHD Programe</div>
        </div>
        </div>
      </div>
      </div>
     
      <div ref={Programe2ref} className="about">
      <div className="container1-video" >
        <div  className="container1-video-left">
        <span className='play' onClick={play}><i className="fa-solid fa-1x fa-play"></i></span>
        
          
        </div>
        <div className="container1-video-right">
          <span className='l-1'>About University</span>
          <h1 className='l-2'>Nurturing Tomorrows's Leaders Today</h1>
          <p className='l-3' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus quos molestias quisquam ad autem at fugit minima, facere possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repudiandae quasi alias laborum voluptas aliquam ipsam nisi voluptate blanditiis eius molestiae nulla non ducimus soluta, dolores perspiciatis dolor id enim!</p>
          <p className='l-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eius repudiandae repellendus iste sapiente tenetur facere optio inventore quisquam quod delectus atque unde doloribus amet, natus voluptates iure. Ratione, aliquam.</p>
          <p className='l-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eius repudiandae repellendus iste sapiente tenetur facere optio inventore quisquam quod delectus atque unde doloribus amet, natus voluptates iure. Ratione, aliquam.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Programe

