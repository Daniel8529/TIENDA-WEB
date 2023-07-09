import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useLocation, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import Select from 'react-select'
import { Carousel } from "bootstrap";
import "../Comprar/TargetaCheckBox.css"
import {  } from '@fortawesome/free-solid-svg-icons'
import swal from "sweetalert";

const seuppier=[{
    label:"Selecciona", value:"Selecciona"},{label:"VIP", value:"VIP"},{label:"Popular", value:"Popular"}]

   

    const mostrarAlerta=()=>{
        swal({title:"Este es el titulo",
              text:"Se a guardado exitosamente",
              icon:"success",
              timer:"2100"
               })
    }
        

function TargetaCheckBox({resivir}) {

    const [select, setselect] = useState([])

    const [selectSupplier,setSelectSupplier] =useState()
    

  
    const mps=({value})=>
    {
     
       setSelectSupplier(value)
    }
   

    useEffect(() => {
        mps({ value: seuppier[0].value }) // Ejecutar mps con el valor predeterminado al iniciar la página
    }, [])
    let verificador=0;
    const GuardarGet= GET()

     const boton=()=>
     {
      
      const fetchEventoData = async () => {
        
       


        GuardarGet.map((it2) =>
          select.map((it) => 
              {if(it2.id==it){
          
                    fetch("http://127.0.0.1:8000/apiApp/v1/Secciones/"+it+"/", 
                  {
                  
                    method: 'PUT', // Establecemos el método HTTP
                    headers: {
                      'Content-Type': 'application/json' // Añadimos las cabeceras de la solicitud
                    },
                    body: JSON.stringify({ 
                      "IdEvento": it2.IdEvento,
                      "Tipo": it2.Tipo,
                      "Secciones": it2.Secciones,
                      "Is_active": true
                    })
                  });
                  mostrarAlerta()
             }}
             
        
          )// Enviamos la solicitud con las opciones establecidas
        )
       

      }
      if(verificador==1){
        
      }
      console.log("Funciona el boton")
          fetchEventoData()
         
     }
     
   

    const handlChage=(event)=>{
        const {value, checked}= event.target
        // console.log(value.target.value)
        if(checked)
        {
            setselect([...select,value])
        }else{
            setselect(select.filter((o)=>o !== value))
        }

    }

    console.log(select)
    return (
      <div className="contenedorcheckbox">

          <Select defaultValue={seuppier[0]} options={seuppier} onChange={mps} />

          <button className="b" onClick={boton}>comprar</button>

          {GuardarGet.map((it) => {

              if (it.Tipo ===selectSupplier ) {

                { if(it.IdEvento==resivir){

                    { if(it.Is_active==false){
                      
                        return (
                            <div class="form-check form-check-inline">
                                <input type="checkbox"  onChange={handlChage} value={it.id}/>
                                {it.Secciones}
                            </div>
                        );
                 }else{
                        return (
                          <div class="form-check form-check-inline">

                              <input type="checkbox" checked={it.Is_active} onChange={handlChage} value={it.id}/>

                              {it.Secciones}
                          </div>
                      );
                   }
                  }}
                }
              }
          })}
      </div>
  );

}

function GET(){

    const [m, setm] = useState([])
    useEffect(() => {

        const fetchEventoData = async () => {
          try {
            const response = await fetch("http://127.0.0.1:8000/apiApp/v1/Secciones/", {
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
    return(
          m

    )

}
export default TargetaCheckBox