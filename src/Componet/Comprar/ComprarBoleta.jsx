import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../Comprar/ComprarBoleta.css"
import TargetaComprar from "./TargetaComprar";
import TargetaCheckBox from "./TargetaCheckBox";
import {useLocation,useParams} from "react-router-dom"
import { useState, useEffect } from 'react'
import Select from 'react-select'
import { Carousel } from "bootstrap";

const seuppier=[{
  label:"VIP", value:"VIP"},{
  label:"Polular", value:"Poular"

}]

const ComprarBoleta=()=>
{
      const  datos  = useParams();
      console.log("id rsivido", datos.id)


    
    return(
      <div className="contener-imgs">
          <TargetaComprar resivir={datos.id}></TargetaComprar>
         
          <TargetaCheckBox resivir={datos.id}></TargetaCheckBox>
     </div>
  )
}

export default ComprarBoleta


// <div className="contener-checkbox">
// <Select  defaultValue={seuppier[0]} options={seuppier}  onChange={mps} />
//   <input  type="checkbox" 
//   value=""
//   id="L1" 
//   name={p[2].Secciones}
//   checked={isChecked}
// onChange={handleOnChange}/>L1
  

  
// </div>

{/* <div className="contener-imgs">

              
<div className="card3" class="card">
  <img src={m.Image} class="card-img-top" alt="..."/>     

  <div class="card-body">
  <h5 class="card-title">{m.Nombre}</h5>
    <p class="card-title">{m.Fecha}</p>
    <p class="card-text">{m.Ciudad}</p>
    <p class="card-text">{m.Lugar}</p>
  </div>
  

</div>


</div> */}