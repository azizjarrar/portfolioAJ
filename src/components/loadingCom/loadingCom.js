import React, { useEffect, useState,useRef } from 'react'
import style from './loadingCom.module.scss'
import Mypics from "./mypics/mypics";
import mp3 from './intro.mp3';
import ReactAudioPlayer from 'react-audio-player';

const LoadingCom=(props)=>{
    const [textone,settextone]=useState([])
    const [texttwo,settexttwo]=useState([])
    const [showHome,setShowHome]=useState(false)
    const [hideThisCom,setHideThisCom]=useState(false)
    const [displayMyPics,setDisplayMyPics]=useState(false)
    const audio_tag=useRef(null)
    useEffect(async ()=>{
        setTimeout(()=>{
          //  props.Props.history.push("/home")
        },3500)
        let textone="hi my name is Aziz a full stack js develloper i would like to present my self";
        var delay=0.0;
        let arraytextone = textone.split('').map((element,index) => {
            delay+=0.08;
            return <span key={index} style={{animationDelay: delay + "s" }}>{element}</span>
        });

        setTimeout(()=>{
            settextone(arraytextone)
        },1500)
  

    },[])

    const showAndHome=()=>{
        setShowHome(true)
    }
    const HideHome=()=>{
        setShowHome(false)
    }
    const clickinl=()=>{
        setHideThisCom(true)
    }
    return(
        <div className={`${style.body} ${showHome&&style.showHome} ${hideThisCom&&style.hideThisCom}` }>
            <div  className={style.loadingLine}></div>
            <div className={style.presentation}>{textone}</div>
            <div></div>
            <div></div>
            <div  className={style.goin} 
            onClick={()=>{
                clickinl()
            props.clickin()}}
            onMouseEnter={()=>{
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