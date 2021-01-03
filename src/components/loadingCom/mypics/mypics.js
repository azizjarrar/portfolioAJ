import React from 'react';
import style from './mypics.module.scss';
import picone from "./pics/picone.jpg";
import pictwo from "./pics/pictwo.jpg";
import picthree from "./pics/picthree.jpg";
import picphore from "./pics/picphore.jpg";
import picfive from "./pics/picfive.jpg";
const Mypics=()=>{
    return(
        <div className={style.body}>
            <div className={style.pic} ><img src={picone}/></div>
            <div className={style.pic} ><img src={pictwo}/></div>
            <div className={style.pic} ><img src={picthree}/></div>
        </div>
    )
}
export default Mypics;
