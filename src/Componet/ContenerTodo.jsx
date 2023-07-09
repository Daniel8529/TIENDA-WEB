import Targeta from '../Componet/Targeta/Targeta';
import Contenedorimg from '../Componet/ContenedorImg/ContenedorImg';
import "../Componet/ContenerTodo.css"
import Select from 'react-select'

import { useState, useEffect } from 'react'

    const seuppier=[
        {label:"Todo", value:"Todo"},{label:"Musica", value:"Musica"},{label:"Artes", value:"Artes"},{label:"Juegos", value:"Juegos"}]


function ContenerTodo()
{
    const [selectSupplier,setSelectSupplier] =useState()
    

  
    const mps=({value})=>
    {
     
       setSelectSupplier(value)
    }
   

    useEffect(() => {
        mps({ value: seuppier[0].value }) // Ejecutar mps con el valor predeterminado al iniciar la página
    }, [])

    return(
         <div>
            
            <Contenedorimg></Contenedorimg>
            <div>
                
               <Select  defaultValue={seuppier[0]} options={seuppier} onChange={mps}/>
            </div>
            <div className="contenedor-targetas">
                <h1 class="form-select" aria-label="Default select example">Proximo Eventos</h1>
                   <Targeta resivir={selectSupplier} ></Targeta>
             </div>
         </div>
    )
}

export default ContenerTodo