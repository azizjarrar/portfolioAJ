import React, { useEffect, useState,useRef } from 'react'
import style from './loadingCom.module.scss'
import AvatMe from './me.png'
const LoadingCom=(props)=>{
    const [textone,settextone]=useState([])
    const [texttwo,settexttwo]=useState([])
    const [showHome,setShowHome]=useState(false)
    useEffect(async ()=>{
        setTimeout(()=>{
          //  props.Props.history.push("/home")
        },3500)
        let textone="hi my name is Aziz";
        let texttwo="i would be so pleased with you on my website";
        var delay=0.0;
        let arraytextone = textone.split('').map((element,index) => {
            delay+=0.08;
            return <span key={index} style={{animationDelay: delay + "s" }}>{element}</span>
        });
        let arraytexttwo = texttwo.split('').map((element,index) => {
            delay+=0.08;
            return <span key={index} style={{animationDelay: delay + "s" }}>{element}</span>
        });
        setTimeout(()=>{
            settextone(arraytextone)
        },1500)
        setTimeout(()=>{
            settexttwo(arraytexttwo)
            
        },4000)
       /* *setTimeout(()=>{
            presentationtwo.current.style.display = "none"
        },9000)*/

    },[])
    const showAndHome=()=>{
        setShowHome(true)
    }
    const HideHome=()=>{
        setShowHome(false)
    }
    return(
        <div className={`${style.body} ${showHome&&style.showHome}` }>
            <div  className={style.loadingLine}></div>
            <div className={style.presentation}>{textone}</div>
            <div  className={style.presentation}>{texttwo}</div>
            <div  className={style.goin} onMouseEnter={()=>{
                showAndHome()
                props.fnin()
            }} onMouseOut={()=>{
                HideHome()
                props.fnout()
                }} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h1>GO IN</h1>
            </div>
    
       
             </div>
    )
}
export default LoadingCom