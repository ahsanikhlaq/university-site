import React, { useState } from 'react'
import './style.css'
import scrollContext from './Context.js/CreateContext'
import { useContext, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com';

             
const Contact = () => {
    
    const [alerts, setAlerts]= useState('')
    const [name, setname]=useState('')
    const [phone, setphone]= useState('')
    const [msg, setmsg]= useState('')
    const {setcontact}= useContext(scrollContext)
    const contactref= useRef()
    const [inpvalue, setinpValue]= useState()
    const alertColor = useRef()

    const submit=(e)=>{
        
         e.preventDefault()
         //setFormData({name: name, phone: phone, message: msg})
         //console.log(onChange1)
         if(name!=='' && phone!=='' && msg!==''){
            setAlerts('sending....')
               alertColor.current.style.color='black'
              // console.log(formData.name)
            emailjs.send('service_ahh6f49', 'template_8atkhl8', {
                name: name,
                phone: phone,
                message: msg,
            }, 'gI-OGkG0zgGaigArb')  // Use your public key here
            .then((response) => {
                //console.log('Email sent successfully:', response);
                setname('');
                 setphone('')
                 setmsg('')
                 
                
                    setAlerts('send successfully')
                    setinpValue('')
                      alertColor.current.style.color='green'
                   
                 
                 return
            }, (err) => {
                
                
                    setAlerts('fail to send')
                    setinpValue('')
                    alertColor.current.style.color='red'

                    
                 
                console.error('Failed to send email:', err);
                return
            });
        
            

            
            setTimeout(()=>{
                setinpValue()
                setAlerts('')
                  setname('')
                  setmsg('')
                  setphone('')
               

            },4000)
            
           return 
         }
         if(name==='' && phone!=='' && msg!==''){
            setAlerts('please enter name')
            setTimeout(()=>{
                setAlerts('')
            },1500)
         }
         else if(name!=='' && phone==='' && msg!==''){
            setAlerts('please enter phone number')
            setTimeout(()=>{
                setAlerts('')
            },1500)
         }
        else if(name!=='' && phone!=='' && msg===''){
            setAlerts('please enter msg')
            setTimeout(()=>{
                setAlerts('')
            },1500)
        }else{
            
            setAlerts('please fill all information')
            setTimeout(()=>{
                setAlerts('')
            },1500)
        }
    }
    const onChange1=(e)=>{
       let value1 = e.target.value
       setname(value1)
       
    }
    const onChange2=(e)=>{
        let value2 = e.target.value
        setphone(value2)
    }
    const onChange3=(e)=>{
        let value3 = e.target.value
        setmsg(value3)
    }
    

    useEffect(()=>{
     let value= contactref.current
     setcontact(value)
     // eslint-disable-next-line
    },[])
  return (
    <div ref={contactref} className='container4'>
      <span className='container4-1'>CONTACT US</span>
      <h1 className='container4-2'>Get in Touch</h1>
      <div className="container4-contact">
        <div className="container4-contact-left">
            <span className="contact-msg">Send us a message <i className="fa-solid fa-folder"></i></span>
            <p className="contact-detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam impedit a voluptatem quibusdam praesentium, dolore voluptate laborum deserunt omnis. Consectetur atque fugiat officiis quia, maxime alias aut modi ab.</p>
            <div className="contact-1">
            <span className='contact-img'><i className="fa-solid fa-user"></i></span> 
            <span className='contact-way'>Contact@GreatStack.dev</span> 
            </div>
            <div className="contact-1">
            <span className='contact-img'><i className="fa-solid fa-phone"></i></span> 
            <span className='contact-way'>03116726140</span> 
            </div>
            <div className="contact-1">
            <span className='contact-img'><i className="fa-solid fa-globe"></i></span> 
            <span className='contact-way'>Lahore, Punjab Pakistan</span> 
            </div>
         </div>
            <div className="container4-contact-right">
                <div className="user-name">
                    <span className='name-heading'>Your name</span>
                    <input onChange={onChange1} value={inpvalue} className='name-inp' type="text" placeholder='Enter name here' name="" id="" />
                
                </div>
                <div className="user-phone">
                    <span className='phone-heading'>Phone Number</span>
                   
                    <input onChange={onChange2} value={inpvalue} className='phone-inp' type="number" name="" id="" placeholder='Enter phone No here' />
                </div>
                <div className="user-msg">
                    <span className='msg-heading'>Enter Your Message Here</span>
                    <input onChange={onChange3} value={inpvalue} className='message-inp' type="text" placeholder='Enter your message here' name="" id="" />
                </div>
                <button onClick={submit} className='submit-btn'>Submit now  <i className="fa-solid fa-arrow-right"></i> </button>
                <div ref={alertColor} className="alert" >{alerts}</div>
            </div>
        
      </div>
    </div>
  )
}

export default Contact
