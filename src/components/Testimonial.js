import React, { useRef, useEffect, useContext } from 'react'
import scrollContext from './Context.js/CreateContext'

import './style.css'
const Testimonial = () => {
    const {settestimonial}= useContext(scrollContext)

    const testimonialref= useRef()
       
      const slider = useRef()

      let tx=0
    const pre = ()=>{
        if(tx < 0){
           tx += 16.7
         }
         slider.current.style.transform= `translateX(${tx}%)`
    }
    const next = (e)=>{
        e.preventDefault()
        
        if(window.innerWidth <= '610'){
            if(tx > -80){
                tx -= 16.7
            }
            slider.current.style.transform= `translateX(${tx}%)`

        }else{
        if(tx > -60){
            
            tx -= 16.7
         }
         slider.current.style.transform= `translateX(${tx}%)`

        }
    
    }
    useEffect(()=>{
        let value= testimonialref.current
        settestimonial(value)
        // eslint-disable-next-line    
       },[])
   
  return (
     
    <div ref={testimonialref} className='testimonial-container'>
      <div className="testimonial-head">
        <span className='t-1'>testimonial</span>
        <span className='t-2'>what student says</span>
      </div>
      <div className="testimonial-main">
      <button onClick={pre}  className="pre"><i className="fa-solid fa-2x fa-arrow-left"></i></button>
      <button onClick={next}   className="next"><i className="fa-solid fa-2x fa-arrow-right"></i></button>
      
          <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="reviewer-info">
                            <img className='reviewer-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGV8bzmi0PwOmg9kNjGe2RGA7uFxdEtoE92A&s" alt="" srcset="" />
                            <div className='info'>
                            <h3 className="reviewer-name">salena gomez1</h3>
                            <span className="reviewer-location">madrid,spain</span>
                            </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates doloribus cum quisquam culpa consequuntur quos doloremque blanditiis sint eos, dolor, omnis repudiandae harum eaque, quibusdam recusandae. Porro, voluptatibus eligendi!</p>
                        
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="reviewer-info">
                            <img className='reviewer-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGV8bzmi0PwOmg9kNjGe2RGA7uFxdEtoE92A&s" alt="" srcset="" />
                            <div className='info'>
                            <h3 className="reviewer-name">salena gomez2</h3>
                            <span className="reviewer-location">madrid,spain</span>
                            </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates doloribus cum quisquam culpa consequuntur quos doloremque blanditiis sint eos, dolor, omnis repudiandae harum eaque, quibusdam recusandae. Porro, voluptatibus eligendi!</p>
                       
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="reviewer-info">
                            <img className='reviewer-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGV8bzmi0PwOmg9kNjGe2RGA7uFxdEtoE92A&s" alt="" srcset="" />
                            <div className='info'>
                            <h3 className="reviewer-name">salena gomez3</h3>
                            <span className="reviewer-location">madrid,spain</span>
                            </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates doloribus cum quisquam culpa consequuntur quos doloremque blanditiis sint eos, dolor, omnis repudiandae harum eaque, quibusdam recusandae. Porro, voluptatibus eligendi!</p>
                        </div>
                    
                </li>
                <li>
                    <div className="slide">
                        <div className="reviewer-info">
                            <img className='reviewer-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGV8bzmi0PwOmg9kNjGe2RGA7uFxdEtoE92A&s" alt="" srcset="" />
                            <div className='info'>
                            <h3 className="reviewer-name">salena gomez4</h3>
                            <span className="reviewer-location">madrid,spain</span>
                            </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates doloribus cum quisquam culpa consequuntur quos doloremque blanditiis sint eos, dolor, omnis repudiandae harum eaque, quibusdam recusandae. Porro, voluptatibus eligendi!</p>
                        </div>
                   
                   
                </li>
                <li>
                    <div className="slide">
                        <div className="reviewer-info">
                            <img className='reviewer-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGV8bzmi0PwOmg9kNjGe2RGA7uFxdEtoE92A&s" alt="" srcset="" />
                            <div className='info'>
                            <h3 className="reviewer-name">salena gomez4</h3>
                            <span className="reviewer-location">madrid,spain</span>
                            </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates doloribus cum quisquam culpa consequuntur quos doloremque blanditiis sint eos, dolor, omnis repudiandae harum eaque, quibusdam recusandae. Porro, voluptatibus eligendi!</p>
                        </div>
                   
                   
                </li>
                <li>
                    <div className="slide">
                        <div className="reviewer-info">
                            <img className='reviewer-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGV8bzmi0PwOmg9kNjGe2RGA7uFxdEtoE92A&s" alt="" srcset="" />
                            <div className='info'>
                            <h3 className="reviewer-name">salena gomez6</h3>
                            <span className="reviewer-location">madrid,spain</span>
                            </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates doloribus cum quisquam culpa consequuntur quos doloremque blanditiis sint eos, dolor, omnis repudiandae harum eaque, quibusdam recusandae. Porro, voluptatibus eligendi!</p>
                        </div>
                   
                   
                </li>
                
            </ul>
          </div>
      </div>
    </div>
    
  )
}

export default Testimonial
