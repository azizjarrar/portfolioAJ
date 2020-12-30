import React, { useEffect, useState } from 'react'
import style from './meteorAnimation.module.scss'
const MeteorAnimationCom=()=>{
    const [starts,setStarts]=useState([])
    const [shownavstate,setshownavstate]=useState(false)
    const [hidenavbar,sethidenavbar]=useState(false)
    const [scrollpos,setscrollpos]=useState(0)
    useEffect(()=>{
        var count=0;
        for(var i=0;i<35;i++){
            setStarts(e=>[...e,<div className={style.onestart}   style={{zIndex:Math.floor(Math.random() * 7),height:Math.floor(Math.random() * 5)+"px",animationDelay:Math.floor(Math.random() * 15)+"s",animationDuration:(Math.floor(Math.random() * 15)+5)+"s","bottom":(Math.floor(Math.random() * window.innerHeight)-window.innerHeight/2),"--r":Math.floor(Math.random() * 5)}}></div>])
        }
        document.getElementById("parentbody").addEventListener("scroll",(e)=>{
            setscrollpos(e.target.scrollTop)
          
        })
        
    },[])

    const shownavstatefn=()=>{
        sethidenavbar(false)
        setshownavstate(true)
    }
    const mouseOut=(e)=>{
        sethidenavbar(true)
        setTimeout(()=>{
          // setshownavstate(false)
        },2000)
    }
    return(

        <div className={style.body}>
            <div className={style.flipcard}>
            <div className={style.goDown} onMouseOver={()=>shownavstatefn()} >
                <div className={style.front}></div>
                <div className={style.back}></div>
            </div>
            </div>
            {shownavstate&&<div id="navbar" onMouseLeave={(e)=>mouseOut(e)} className={`${hidenavbar&&style.hidenav} ${style.shownav} `}>
                <ul>
                    <li><a>ABOUT</a></li>
                    <li><a>SKILLS</a></li>
                    <li><a>CONTACT</a></li>
                </ul>

                </div>}
           <h1 id="header" style={{right:-(window.innerWidth/2+scrollpos)+"px"}}>Fullstack  <span>js</span> <br></br> Developer </h1>
            {starts} 
        </div>
    )
}
export default MeteorAnimationCom