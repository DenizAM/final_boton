import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import {Link} from 'react-router-dom';

const MenuBoton = () => {

  const navigate1 = useNavigate();
  function handleClick3(){
      navigate3("/modificaciones");
  }


  const navigate2 = useNavigate();
  function handleClick1(){
      navigate1("/sistemaImplementado");
  }


  const navigate3 = useNavigate();
  function handleClick2(){
      navigate2("/codigoFuente");
  }


  return (
    <div className='menuBoton'>


       <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                

                
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Actividades del curso
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Unidad 1</a></li>
                        <ul> 
                            <li><Link class="dropdown-item" to="/ActPreliminarU1">Actividad preliminar</Link></li>
                            <li><Link class="dropdown-item" to="/Act2U1">Actividad 2. El product backlog</Link></li>
                            <li><Link class="dropdown-item" to="/ActIntegradoraU1">Actividad integradora. Sprint, el corazón de SCRUM</Link></li>
                        </ul>
                    <li><a class="dropdown-item" href="#">Unidad 2</a></li>
                        <ul> 
                            <li><Link class="dropdown-item" to="/Actividad1Unidad2">Actividad 1. Aplicación de SCRUM</Link></li>
                            <li><Link class="dropdown-item" to="/Actividad2Unidad2">Actividad 2. El sprint Shedule</Link></li>
                            <li><Link class="dropdown-item" to="/ActividadIntegradoraU2">Actividad 2. El sprint Shedule</Link></li>
                        </ul>
                    <li><a class="dropdown-item" href="#">Unidad 3</a></li>
                        <ul> 
                            <li><Link class="dropdown-item" to="/ActPreliminarU3">Actividad preliminar. Retomando mi primer sprint</Link></li>
                            <li><Link class="dropdown-item" to="/Actividad1Unidad3">Actividad 1. Primera fase de desarrollo, revisión y ajuste de los Sprints</Link></li>
                            <li><Link class="dropdown-item" to="/Actividad2Unidad3">Actividad 2. Segunda fase de desarrollo, revisión y ajuste de los Sprints y el backlog</Link></li>
                            <li><Link class="dropdown-item" to="/Actividad3Unidad3">Actividad 3. Tercera fase de desarrollo, revisión y ajuste de los Sprints y el backlog</Link></li>
                            <li><Link class="dropdown-item" to="/ActIntegradoraU3">Actividad integradora. Producto final U3</Link></li>
                        </ul>
                    <li><a class="dropdown-item" href="#">Unidad 4</a></li>
                        <ul> 
                            <li><Link class="dropdown-item" to="/Actvidad1Unidad4">Actividad 1. Reunión de revisión inicial</Link></li>
                            <li><Link class="dropdown-item" to="/Actvidad2Unidad4">Actividad 2. Reunión para revisión de modificaciones</Link></li>
                        </ul>
                    <li><Link class="dropdown-item" to="/ProductoFinal">Producto integrador. El final del proceso</Link></li>
                  </ul>
                </div>



                <Link class="btn btn-primary" to="https://denizam.github.io/app-coatepec/" role="button">Sistema Implementado</Link>
                <button type="button" onClick={handleClick2} class="btn btn-primary">Código Fuente</button>
                <button type="button" onClick={handleClick3}  class="btn btn-primary">Reporte de Modificaciones</button>
                <Link class="btn btn-primary" to="https://github.com/DenizAM/app-coatepec" role="button">Respositorio GitHub</Link>

            </div>

    </div>
  )
}

export default MenuBoton
