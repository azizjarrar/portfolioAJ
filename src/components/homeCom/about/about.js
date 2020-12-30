import React, { useEffect,useState ,useRef,useLayoutEffect} from 'react'
import style from './about.module.scss'
import me from './me.png'

const About = ()=>{
    const [scrollpos,setscrollpos]=useState(0)
    const [clientHeight,setclientHeight]=useState(0)//toul scrol b7ad thetha
    const [scrollHeight,setscrollHeight]=useState(0)//toul page li feha scroll
    const body = useRef(null);
    const aboutmetext=useRef(null)
    useEffect(()=>{
        document.getElementById("parentbody").addEventListener("scroll",(e)=>{
            setscrollpos(e.target.scrollTop)
            setclientHeight(e.target.scrollheight)  
            setscrollHeight(e.target.scrollHeight)
            if ((e.target.clientHeight  + e.target.scrollTop) >= e.target.scrollHeight) {
              //  alert("you're at the bottom of the page");
            }
        })

        
 
     
    },[])

    useLayoutEffect(()=>{
    },[aboutmetext.current])
    
        const parallax=(cc)=>{
            return (scrollpos-(cc/2))
        }
  
    return(
        <div  ref={body} className={style.body} id="aboutme">
            {body.current!=null&&<div className={style.mypicmyname}>
                <h1 style={{left:((scrollpos*0.1)-((body.current.offsetTop)*0.1))+"px"}} className={style.myname}>AZIZ JARRAR</h1>
                <h1 style={{left:((scrollpos*0.1)-((body.current.offsetTop)*0.1))+"px"}} className={style.mynameoutline}>AZIZ JARRAR</h1>
              <div style={{right:parallax(body.current.offsetTop)<0&&(parallax(body.current.offsetTop))+"px"}} className={style.mypic}>
               <img src={me}/>
               </div>
               </div>}
           {body.current!=null&&<div className={style.aboutme} >
                <div className={style.textContainer}>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</p><br></br>
                    <p>been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty</p><br></br>
                    <p>release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p><br></br>
               
                </div>
                <div ref={aboutmetext} className={style.aboutmetext}>
                {aboutmetext.current!=null&&<div className={style.warper}>
                <div className={style.concon} style={{"--d":"1s"}}><p style={{"--d":"1s"}}>JAVASCRIPT</p></div>
                <div className={style.concon} style={{"--d":"4.8s"}}><p style={{"--d":"4.8s"}}>NODE JS</p></div>
                <div className={style.concon} style={{"--d":"3.5s"}}><p style={{"--d":"3.5s"}}>MONGODB</p></div>
                <div className={style.concon} style={{"--d":"6s"}}><p style={{"--d":"6s"}}>HTML</p></div>
                <div className={style.concon} style={{"--d":"4s"}}><p style={{"--d":"4s"}}>CSS</p></div>
                <div className={style.concon} style={{"--d":"6.5s"}}><p style={{"--d":"6.5s"}}>SASS</p></div>
                <div className={style.concon} style={{"--d":"5s"}}><p style={{"--d":"5s"}}>FIGMA</p></div>
                <div className={style.concon} style={{"--d":"2.5s"}}><p style={{"--d":"2.5s"}}>console.log()</p></div>
                <div className={style.concon} style={{"--d":"7s"}}><p style={{"--d":"7s"}}>Hello Wolrd</p></div>
                </div>}
                </div>
            </div>}
        </div>
    )
}
export default About