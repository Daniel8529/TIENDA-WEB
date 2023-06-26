import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Outlet, Link,NavLink} from "react-router-dom"
import "../Targeta/Targeta.css"
import { useState, useEffect } from 'react'
const items = [
  { id: 1, title: 'Imagen 1', image: "https://th.bing.com/th/id/R.651be099de50dfbe853128d580964320?rik=SGfNfmBHsgZYxA&riu=http%3a%2f%2fwww.radiomargherita.com%2fwp-content%2fuploads%2f2016%2f04%2fMUSICA.jpg&ehk=lwkYsBgBU0V6K8IGvaQQrCPbxKtHsFef2cE8GvRcJ64%3d&risl=&pid=ImgRaw&r=0"  },
  { id: 2, title: 'Imagen 2', image: "https://th.bing.com/th/id/R.651be099de50dfbe853128d580964320?rik=SGfNfmBHsgZYxA&riu=http%3a%2f%2fwww.radiomargherita.com%2fwp-content%2fuploads%2f2016%2f04%2fMUSICA.jpg&ehk=lwkYsBgBU0V6K8IGvaQQrCPbxKtHsFef2cE8GvRcJ64%3d&risl=&pid=ImgRaw&r=0"  },
  { id: 3, title: 'Imagen 3', image: "https://th.bing.com/th/id/R.651be099de50dfbe853128d580964320?rik=SGfNfmBHsgZYxA&riu=http%3a%2f%2fwww.radiomargherita.com%2fwp-content%2fuploads%2f2016%2f04%2fMUSICA.jpg&ehk=lwkYsBgBU0V6K8IGvaQQrCPbxKtHsFef2cE8GvRcJ64%3d&risl=&pid=ImgRaw&r=0"  },
  { id: 4, title: 'Imagen 3', image: "https://th.bing.com/th/id/R.651be099de50dfbe853128d580964320?rik=SGfNfmBHsgZYxA&riu=http%3a%2f%2fwww.radiomargherita.com%2fwp-content%2fuploads%2f2016%2f04%2fMUSICA.jpg&ehk=lwkYsBgBU0V6K8IGvaQQrCPbxKtHsFef2cE8GvRcJ64%3d&risl=&pid=ImgRaw&r=0"  },
  { id: 5, title: 'Imagen 3', image: "https://th.bing.com/th/id/R.651be099de50dfbe853128d580964320?rik=SGfNfmBHsgZYxA&riu=http%3a%2f%2fwww.radiomargherita.com%2fwp-content%2fuploads%2f2016%2f04%2fMUSICA.jpg&ehk=lwkYsBgBU0V6K8IGvaQQrCPbxKtHsFef2cE8GvRcJ64%3d&risl=&pid=ImgRaw&r=0"  },
  
];

  
  


function Targeta({selectSupplier}){

  
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

  
   
 },[])
 

  useEffect(()=>{
   
     console.log("Aqui esta mi dato ")
     console.log(m)
  },[m])
  





 
  const carouselItems = [];
  for (let i = 0; i < m.length; i++) {
    const item = m[i];
    
     
    carouselItems.push(
      
      
      <div class="card" key={item.id}>
              <img src={item.Image} class="card-img-top" alt="..."/>     

              <div class="card-body">
              <h5 class="card-title">{item.Nombre}</h5>
                <p class="card-title">{item.Fecha}</p>
                <p class="card-text">{item.Ciudad}</p>
                <p class="card-text">{item.Lugar}</p>
                <Link  to={"/ComprarBoleta/"+item.id}  class="btn btn-primary">Comprar </Link>

                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
               </div>
               
            <Outlet/>
           </div>
        
    );
    
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