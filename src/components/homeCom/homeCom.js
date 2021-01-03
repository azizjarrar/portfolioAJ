import React from 'react'
import style from './homeCom.module.scss'
import About from './about/about'
import MeteorAnimationCom from './meteorAnimation/meteorAnimationCom'
const HomeCom=(props)=>{
    return(
        <div className={`${style.body} ${props.stateLoadPage&&style.bodyrotate} ${props.goinstate&&style.goinstate}`} id="parentbody">
            {/*<Navbar></Navbar>*/}
            <MeteorAnimationCom></MeteorAnimationCom>
            <About ></About>
        </div>
    )
}
export default HomeCom