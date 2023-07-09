import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Outlet, Link,NavLink} from "react-router-dom"
import "../Targeta/Targeta.css"
import { useState, useEffect } from 'react'
// import { facalenda } from '@fortawesome/free-solid-svg-icons'

function Targeta({resivir}){

  
    const [m,setm]=useState([])
    useEffect(()=>{

          const fetchEventoData = async () => {
            try{
              const response = await fetch("http://127.0.0.1:8000/apiApp/v1/Eventos/", {
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

   },[resivir])
 

  useEffect(()=>{
   
     console.log("Aqui esta mi dato ")
     console.log(m)
  },[m])
  

  



 
  const carouselItems = [];
  for (let i = 0; i < m.length; i++) {
  
    
    
    if(m[i].Tipo==resivir){
            carouselItems.push(
              
            
              <div class="card" key={m[i].id}>
              <div className="Contenedorimagen">
                  <img src={m[i].Image} class="Imagen" alt="..."/>     
                  </div>
                 
                      <h5 class="card-title">{m[i].Nombre}</h5>
                        <p class="card-title">{m[i].Fecha}</p>
                        <p class="card-text">{m[i].Ciudad}</p>
                        <p class="card-text">{m[i].Lugar}</p>
                        <Link  to={"/ComprarBoleta/"+m[i].id}  class="btn btn-primary">Comprar </Link>
                 
                 
                  
                <Outlet/>
              </div>
                  
            );
    }else{

        if(resivir=="Todo"){
              carouselItems.push(
                
                <div class="card" key={m[i].id}>
                <div className="Contenedorimagen">
                    <img src={m[i].Image} class="Imagen" alt="..."/>     
                    </div>
                   
                        <h5 class="card-title">{m[i].Nombre}</h5>
                          <p class="card-title">{m[i].Fecha}</p>
                          <p class="card-text">{m[i].Ciudad}</p>
                          <p class="card-text">{m[i].Lugar}</p>
                          <Link  to={"/ComprarBoleta/"+m[i].id}  class="btn btn-primary">Comprar </Link>
                   
                   
                    
                  <Outlet/>
                </div>
              
             );
            
          }
    }
    
  }


    return(
        
      carouselItems

      
    )
}

export default Targeta

  // const fetchget=async()=>{
    //   const url = 'http://127.0.0.1:8000/apiApp/v1/Eventos/';
  
    //   fetch(url)
    //     .then(response => response.json()) 
    //     .then(data => {

    //       console.log("A here de fecht")
    //       console.log(data)
    //       setm(data)
          
      
    //     })
    // }

//Enviar
// const options = {
//   method: 'POST', // Establecemos el método HTTP
//   headers: {
//     'Content-Type': 'application/json' // Añadimos las cabeceras de la solicitud
//   },
//   body: JSON.stringify({ // Convertimos los datos a JSON y los añadimos al cuerpo
//     Nombre: "Funciona5",
//     Fecha: "3/6/2023 12:00:00 a. m.",
//     Pais: "Estados Unidos",
//     Provincia: "Alabama",
//     Ciudad: "Pimentel",
//     Lugar: "La checa",
//     Cantidad: 50,
//     Precio: 50
//   })
// };

// fetch(url, options) // Enviamos la solicitud con las opciones establecidas


// const [eventList, setEventList] = useState([]);
// async function get()
// {
//   const url = 'http://127.0.0.1:8000/apiApp/v1/Boletas/';
//   const options = {
//     method: 'GET',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//     };
//         try {
//             const response = await fetch(url,options);
//             const data = await response.json();
//             setEventList(data);
//           } catch (error) {
//             console.error('Error:', error);
//           }
// }