import React from 'react';
import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () =>{
    const videoSource ="AireBubbles.mp4"
    return(
        <div className={classes.container}>
             <video autoPlay loop muted id="video">
                <sources src={videoSource} type='video/mp4'/>
                your browser dose not support this video tag.
            </video>
        </div>
    )
}
export default BackgroundVideo;