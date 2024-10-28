//import React, { Children } from 'react'
import { useState } from 'react'
import scrollContext from './CreateContext'


const Provider = ({children}) => {
    const [home, setHome]= useState()
    const [programe, setprograme]=useState()
    const [about, setabout]=useState()
    const [campus, setcampus]=useState()
    const [testimonial, settestimonial]=useState()
    const [contact, setcontact]=useState()
    const [display, setdisplay]= useState('none')
    const [video, setvideo]= useState()
    const [width2, setWidth2]= useState()
  return (
    <div>
      <scrollContext.Provider value={{home, setHome, programe, setprograme, about, setabout, campus, setcampus, testimonial, settestimonial, contact, setcontact, display, setdisplay, video, setvideo, width2, setWidth2}} >
        {children}
      </scrollContext.Provider>
    </div>
  )
}

export default Provider
