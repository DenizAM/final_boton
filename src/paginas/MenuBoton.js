import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

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
                            <li><a class="dropdown-item" href="/ActPreliminarU1">Actividad preliminar</a></li>
                            <li><a class="dropdown-item" href="/Act2U1">Actividad 2. El product backlog</a></li>
                            <li><a class="dropdown-item" href="/ActIntegradoraU1">Actividad integradora. Sprint, el corazón de SCRUM</a></li>
                        </ul>
                    <li><a class="dropdown-item" href="#">Unidad 2</a></li>
                        <ul> 
                            <li><a class="dropdown-item" href="/Actividad1Unidad2">Actividad 1. Aplicación de SCRUM</a></li>
                            <li><a class="dropdown-item" href="/Actividad2Unidad2">Actividad 2. El sprint Shedule</a></li>
                            <li><a class="dropdown-item" href="/ActividadIntegradoraU2">Actividad 2. El sprint Shedule</a></li>
                        </ul>
                    <li><a class="dropdown-item" href="#">Unidad 3</a></li>
                        <ul> 
                            <li><a class="dropdown-item" href="/ActPreliminarU3">Actividad preliminar. Retomando mi primer sprint</a></li>
                            <li><a class="dropdown-item" href="/Actividad1Unidad3">Actividad 1. Primera fase de desarrollo, revisión y ajuste de los Sprints</a></li>
                            <li><a class="dropdown-item" href="/Actividad2Unidad3">Actividad 2. Segunda fase de desarrollo, revisión y ajuste de los Sprints y el backlog</a></li>
                            <li><a class="dropdown-item" href="/Actividad3Unidad3">Actividad 3. Tercera fase de desarrollo, revisión y ajuste de los Sprints y el backlog</a></li>
                            <li><a class="dropdown-item" href="/ActIntegradoraU3">Actividad integradora. Producto final U3</a></li>
                        </ul>
                    <li><a class="dropdown-item" href="#">Unidad 4</a></li>
                        <ul> 
                            <li><a class="dropdown-item" href="/Actvidad1Unidad4">Actividad 1. Reunión de revisión inicial</a></li>
                            <li><a class="dropdown-item" href="/Actvidad2Unidad4">Actividad 2. Reunión para revisión de modificaciones</a></li>
                        </ul>
                    <li><a class="dropdown-item" href="/ProductoFinal">Producto integrador. El final del proceso</a></li>
                  </ul>
                </div>



                <a class="btn btn-primary" href="https://denizam.github.io/app-coatepec/" role="button">Sistema Implementado</a>
                <button type="button" onClick={handleClick2} class="btn btn-primary">Código Fuente</button>
                <button type="button" onClick={handleClick3}  class="btn btn-primary">Reporte de Modificaciones</button>
                <a class="btn btn-primary" href="https://github.com/DenizAM/app-coatepec" role="button">Respositorio GitHub</a>

            </div>

    </div>
  )
}

export default MenuBoton
