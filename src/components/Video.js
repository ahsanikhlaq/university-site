import React from 'react'
import video from './campus video.mp4'
import './style.css'
import { useContext, useEffect, useRef } from 'react'
import scrollContext from './Context.js/CreateContext'
const Video = () => {
    const videoref = useRef(null)
    const { display, setvideo, setdisplay } = useContext(scrollContext)

    useEffect(() => {
        let value = videoref.current
        setvideo(value)
    })
    const pause = (e) => {
        e.preventDefault()

        videoref.current.pause()
    }
    const back = (e) => {
        e.preventDefault()
        videoref.current.pause()

       
        setdisplay('none')
    }

    return (
        <div>
            <div onClick={back} className="video" style={{ display: display }}>
                <video onClick={pause} ref={videoref} className='video-1' controls>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Video
