import React, { useEffect, useState } from 'react'
import style from './meteorAnimation.module.scss'
const MeteorAnimationCom=()=>{
    const [starts,setStarts]=useState([])
    const [scrollpos,setscrollpos]=useState(0)
    useEffect(()=>{
        var count=0;
        for(var i=0;i<15;i++){
            setStarts(e=>[...e,<div className={style.onestart}   style={{zIndex:Math.floor(Math.random() * 2),height:Math.floor(Math.random() * 3)+"px",animationDelay:Math.floor(Math.random() * 15)+"s",animationDuration:(Math.floor(Math.random() * 15)+5)+"s","bottom":(Math.floor(Math.random() * window.innerHeight)-window.innerHeight/2),"--r":Math.floor(Math.random() * 5)}}></div>])
        }
        document.getElementById("parentbody").addEventListener("scroll",(e)=>{
            setscrollpos(e.target.scrollTop)
          
        })
        
    },[])


    return(

        <div className={style.body}>
    

           <h1 id="header" style={{right:-(window.innerWidth/2+scrollpos)+"px"}}>IM A Fullstack  <span>js</span> <br></br> Developer </h1>
            {starts} 
        </div>
    )
}
export default MeteorAnimationCom