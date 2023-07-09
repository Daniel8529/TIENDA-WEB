import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../Comprar/TargetaComprar.css"
import { useLocation, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import Select from 'react-select'
import { Carousel } from "bootstrap";




function TargetaComprar({ resivir }) {
  console.log("Aqui esta mi de id de targeta", resivir)
  const [m, setm] = useState([])
  useEffect(() => {

    const fetchEventoData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/apiApp/v1/Eventos/" + resivir, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },

        })

        const data = await response.json()
        console.log("Aqui fetch ")
        console.log(data)
        setm(data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchEventoData()

  }, [])


  useEffect(() => {

    console.log("Aqui esta mi de targeta ")
    console.log(m)
  }, [m])

  return (
    
      <div className="card3" class="card">
        
        <div className="Contenedorimagen">
                    <img src={m.Image} class="Imagen" alt="..."/>     
                </div>
                   
                 <h5 class="card-title">{m.Nombre}</h5>
                  <p class="card-title">{m.Fecha}</p>
                   <p class="card-text">{m.Ciudad}</p>
                  <p class="card-text">{m.Lugar}</p>
       

      </div>


    
  )

}


export default TargetaComprar