import React, { useEffect, useState } from 'react'
import './style.css'
//import useWindowWidth from '@rehooks/window-width';
import scrollContext from './Context.js/CreateContext'
import { useContext } from 'react'

const Navbar = () => {
    const {home, programe, about, campus, testimonial, contact, setWidth2} = useContext(scrollContext)
     const [width, setWidth]= useState()
     //const [height, setheight]=useState()
     const [show, setShow]= useState('')
     const [display, setdisplay]= useState('none')
     const [color, setcolor]= useState('')
    const click = (e)=>{
        
        e.preventDefault()
        if(display==='none' || show==='ahsan1 2s backwards'){
          setShow('ahsan 2s forwards')
            setdisplay('block')
        }
        if(show==='ahsan 2s forwards'){
            //console.log('ahsan')
           setShow('ahsan1 2s backwards')
            //setdisplay('none')
        }

        }
         
        useEffect(() => {

            window.addEventListener('scroll', (e)=>{
                let scrol= window.scrollY
                if(scrol){
                    setcolor('rgb(63, 63, 235)')
                }
                if(!scrol){
                    e.preventDefault()

                    setcolor('')
                }
                if(scrol<0){

                }
            })
            const handleResize = () => {
              setWidth(window.innerWidth);
              setWidth2(window.innerWidth)
            };
            
            window.addEventListener('resize', handleResize);
              
            return () => {
                window.removeEventListener('resize', handleResize);
            };
            // eslint-disable-next-line
          }, []);
        useEffect(()=>{
            
            if(width>= 1000){
                setdisplay('none')
                setShow('ahsan1 1s backwards')
            }
        },[width])

        const scrollToHome=(e)=>{
            e.preventDefault()
            home.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        const scrollToPrograme=(e)=>{
            e.preventDefault()
            programe.scrollIntoView({ behavior: 'smooth' });
            

        }
        const scrollToAbout=(e)=>{
            
            e.preventDefault()
            about.scrollIntoView({ behavior: 'smooth' });
        }
        const scrollToCampus=(e)=>{
            
            e.preventDefault()
            campus.scrollIntoView({ behavior: 'smooth' });
        }
        const scrollToTestimonial=(e)=>{
            
            e.preventDefault()
            testimonial.scrollIntoView({ behavior: 'smooth' });
        }
        const scrollContact=(e)=>{
            
            e.preventDefault()
            contact.scrollIntoView({ behavior: 'smooth' });
        }
        
    
      return (
    <div className='navbar' style={{backgroundColor:color}}>

     <nav className='nav1'>
        <div className="box1">
        <div className="img1"><i className="fa-solid fa-2x fa-graduation-cap"></i></div>
        <div className="name">Edusity</div>
        </div>
        <ul className='ul1'>
                <a href="./Home" onClick={scrollToHome}  ><li>Home</li></a>
                <a href="./Programe" onClick={scrollToPrograme} ><li>Program</li></a>
                <a href="./Programe" onClick={scrollToAbout} ><li>About us</li></a>
                <a href="./Campus" onClick={scrollToCampus}><li>Campus</li></a>
                <a href="./Testimoial" onClick={scrollToTestimonial}><li>Testimonials</li></a>
                <a  href="./Contact" onClick={scrollContact}><button className='btn1'>Contact us</button></a>
        </ul>
        <div onClick={click} className="click">
            <i className="fa-solid fa-2x fa-bars"></i>
        </div>
     </nav>
      <nav className='nav2' style={{display:display, animation:show}}>
        
      <div onClick={click} className="click" id='click-side'>
            <i className="fa-solid fa-2x fa-bars"></i>
        </div>
        
        <ul className='ul2'>
                   
                <a href="./Home" onClick={scrollToHome}><li>Home</li></a>
                <a href="./Programe" onClick={scrollToPrograme}><li>Program</li></a>
                <a href="./Programe" onClick={scrollToAbout}><li>About us</li></a>
                <a href="./Campu" onClick={scrollToCampus}><li>Campus</li></a>
                <a href="./Testimonial" onClick={scrollToTestimonial}><li>Testimonials</li></a>
                <a  href="./Contact" onClick={scrollContact}><button className='btn1'>Contact us</button></a>
        </ul>
      </nav>

       

    </div>
  )
}

export default Navbar
