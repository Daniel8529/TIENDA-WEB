import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../Comprar/ComprarBoleta.css"
import {useLocation,useParams} from "react-router-dom"
import { useState, useEffect } from 'react'
import Select from 'react-select'

const seuppier=[{
  label:"VIP", value:"VIP"},{
  label:"Polular", value:"Poular"

}]

const ComprarBoleta=()=>
{
   const [selectSupplier,setSelectSupplier] =useState()
   const [isChecked, setIsChecked] = useState(false);

   const handleOnChange = () => {
     setIsChecked(!isChecked);
   };
 
    
    const mps=(event)=>
    {
     
       setSelectSupplier(event)
    }
    const  datos  = useParams();
    const [m,setm]=useState([])
    useEffect(()=>{
  
      const fetchEventoData = async () => {
        try{
          const response = await fetch("http://127.0.0.1:8000/apiApp/v1/Eventos/"+datos.id, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            },
           
          })
  
          const data = await response.json()
          console.log("Aqui fetch ")
          console.log(data)
          setm(data)
  
        }catch (error) {
          console.log(error)
        }
      }
      fetchEventoData()
  
    
     
   },[])
   
  
    useEffect(()=>{
     
       console.log("Aqui esta mi dato ")
       console.log(m)
    },[m])
    

    return(
      <div>
        <div className="contener-checkbox">
          <Select options={seuppier} onChange={mps} />
            <input  type="checkbox" 
            value=""
            id="L1" 
            name="L1"
            checked={isChecked}
          onChange={handleOnChange}/>L1
            
           
            
          </div>
        <div className="contener-imgs">

           
            <div className="card3" class="card">
              <img src={m.Image} class="card-img-top" alt="..."/>     

              <div class="card-body">
              <h5 class="card-title">{m.Nombre}</h5>
                <p class="card-title">{m.Fecha}</p>
                <p class="card-text">{m.Ciudad}</p>
                <p class="card-text">{m.Lugar}</p>
               </div>
               

           </div>
        
    
         

        </div>
        </div>
    )
}

export default ComprarBoleta