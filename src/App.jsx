import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
// import Contenedor from ".Nav/Componet/Nav.jsx"
// import Contenedorimg from "./Componet/ContenedorImg.jsx"
// import Contenedorbody from "./Componet/Contenedorbody.jsx"
import Nav from './Componet/NavBar/Nav';
import ContenerTodo from './Componet/ContenerTodo';
import ComprarBoleta from './Componet/Comprar/ComprarBoleta';
import Registro from './Componet/Login/Registro';
import {Router,Routes,Route} from "react-router-dom"
import Mostrarvideo from './Componet/Mostrarvideo';
import './App.css'

function App() {


  return (
        
          <div>
            <header>
                   <Nav></Nav>
                   
                   {/* <Mostrarvideo></Mostrarvideo> */}
            </header>
            <Routes> 
             <Route> 
                
               <Route path="/Registro" element={<Registro/> }/>
               <Route path="/ContenerTodo" element={<ContenerTodo/> }/>
               <Route path="/ComprarBoleta/:id"  component={<ComprarBoleta/>} element={<ComprarBoleta/> }/>
                  
               </Route>
            </Routes>
            
              
          </div>

      
  )
}

export default App
