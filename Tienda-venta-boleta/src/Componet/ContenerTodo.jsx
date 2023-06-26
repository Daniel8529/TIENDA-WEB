import Targeta from '../Componet/Targeta/Targeta';
import Contenedorimg from '../Componet/ContenedorImg/ContenedorImg';
import "../Componet/ContenerTodo.css"
import Select from 'react-select'

import { useState, useEffect } from 'react'

    const seuppier=[{
        label:"Conierto", value:"Concierto"
    }]


function ContenerTodo()
{
    // const [selectSupplier,setSelectSupplier] =useState()
    
    // const mps=(event)=>
    // {
     
    //    setSelectSupplier(event)
    // }
   
    return(
         <div>
            
            <Contenedorimg></Contenedorimg>
            <div>
                
               {/* <Select options={seuppier} onChange={mps}/> */}
            </div>
            <div className="contenedor-targetas">
                <h1 class="form-select" aria-label="Default select example">Proximo Eventos</h1>
                   <Targeta  ></Targeta>
             </div>
         </div>
    )
}

export default ContenerTodo