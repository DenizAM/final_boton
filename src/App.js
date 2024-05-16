
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MenuBoton from './paginas/MenuBoton';
import CodigoFuente from './paginas/CodigoFuente';
import SistemaImplementado from './paginas/SistemaImplementado';
import Modificaciones from './paginas/Modificaciones';


import ActPreliminarU1 from './paginas/Unidad1/ActPreliminarU1';
import Act2U1 from './paginas/Unidad1/Act2U1';
import ActIntegradoraU1 from './paginas/Unidad1/ActIntegradoraU1';


import Actividad1Unidad2 from './paginas/Unidad2/Actividad1Unidad2';
import Actividad2Unidad2 from './paginas/Unidad2/Actividad2Unidad2';
import ActividadIntegradoraU2 from './paginas/Unidad2/ActividadIntegradoraU2';


import Actividad1Unidad3 from './paginas/Unidad3/Actividad1Unidad3';
import Actividad2Unidad3 from './paginas/Unidad3/Actividad2Unidad3';
import Actividad3Unidad3 from './paginas/Unidad3/Actividad3Unidad3';
import ActPreliminarU3 from './paginas/Unidad3/ActPreliminarU3';
import ActIntegradoraU3 from './paginas/Unidad3/ActIntegradoraU3';


import Actvidad1Unidad4 from './paginas/Unidad4/Actvidad1Unidad4';
import Actvidad2Unidad4 from './paginas/Unidad4/Actvidad2Unidad4';

import ProductoFinal from './paginas/ProductoFinal';

function App() {
  return (
    <div className="App">

 
<Router>
          <MenuBoton/>
            <Routes>
                <Route path='CodigoFuente' exact Component={CodigoFuente}/>  
                <Route path='Modificaciones' exact Component={Modificaciones}/>  
                <Route path='SistemaImplementado' exact Component={SistemaImplementado}/>  


                <Route path='ActPreliminarU1' exact Component={ActPreliminarU1}/>  
                <Route path='Act2U1' exact Component={Act2U1}/>  
                <Route path='ActIntegradoraU1' exact Component={ActIntegradoraU1}/>  


                <Route path='Actividad1Unidad2' exact Component={Actividad1Unidad2}/>  
                <Route path='Actividad2Unidad2' exact Component={Actividad2Unidad2}/>  
                <Route path='ActividadIntegradoraU2' exact Component={ActividadIntegradoraU2}/>  


                <Route path='Actividad1Unidad3' exact Component={Actividad1Unidad3}/>  
                <Route path='Actividad2Unidad3' exact Component={Actividad2Unidad3}/>  
                <Route path='Actividad3Unidad3' exact Component={Actividad3Unidad3}/>  
                <Route path='ActPreliminarU3' exact Component={ActPreliminarU3}/>  
                <Route path='ActIntegradoraU3' exact Component={ActIntegradoraU3}/>  

                
                <Route path='Actvidad1Unidad4' exact Component={Actvidad1Unidad4}/>  
                <Route path='Actvidad2Unidad4' exact Component={Actvidad2Unidad4}/>  


                <Route path='/' exact Component={ProductoFinal}/>  
            </Routes>
        </Router>


    </div>
  );
}

export default App;
