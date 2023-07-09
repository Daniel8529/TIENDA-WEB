import { useState } from 'react'
import {Router,Routes,Route} from "react-router-dom"
import "../Componet/Mostrarvideo.css"

function Mostrarvideo(){
    // const videoRef = useRef(null);

    // const playVideo = () => {
    //   videoRef.current.play();
    // }
  
    return (
      <div className="videoo">
       <source src='https://www.youtube.com/watch?v=r6eYuCy-OOE'></source>
      </div>
    );
  
}

export default Mostrarvideo