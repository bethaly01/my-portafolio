import React, {  useEffect,useRef } from 'react'
import {init} from 'ityped'
import "./intro.css"


export default function intro() {
    const textRef = useRef();
    useEffect(()=>{
      init(textRef.current, { showCursor: true, 
        strings: ['Software Developer', 'Web Developer', 'App Developer', 'International Student', 'from Mexico' ] })
    },[])

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
            <img src='pictures/photoNoBackground.png' alt='profile-Bethaly'/>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
            <h2>Hi there, I'm </h2>
            <h1>Bethaly Tenango Anaya</h1>
            <h3><span ref={textRef}> </span></h3>
        </div>
      </div>
    </div>
  )
}
