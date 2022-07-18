import React from 'react'
import CuadroFiltrar from './components/CuadroFiltrar.component'
import CuadroMedicos from './components/CuadroMedicos.component'
import paciente from '../../assets/paciente.png'
import './index.css'
import NavigationTo from '../../componets/NavigationTo'

const BuscarMedico = _ => {
    const ListaEspecialidades = ["Especialidad 1","Especialidad 2","Especialidad 3","Especialidad 4","Especialidad 5"]
    //PASA LOS DATOS DE ESTA PAGINA A LA DE PUNTUAR MEDICO A TRAVES DE PARAMETROS DE URL
    return <>
        <div className="body">
        <div className="card" id="encabezado">
            <div className="row">
                <div className="col">
                    <div className="fs-5 ms-4">
                        <NavigationTo className="link" href="/inicio-paciente">Principal</NavigationTo>
                        /
                        <NavigationTo className="link" href="#">Buscar medico</NavigationTo>
                    
                    </div>
                    <div className="mt-2 mb-2 ms-4 fw-bold fs-1" id="divNombreEmpresa">
                        EMPRESA XYZ
                    </div>
                </div>
                <div className="col" id="nombrePaciente">
                    NOMBRE DEL PACIENTE
                </div>
                <img className="imgPaciente" src={paciente} alt="paciente"></img>
            </div>
        </div>
        <div className="row">
                <CuadroFiltrar especialidades = {ListaEspecialidades}/>
                <CuadroMedicos/>
            </div>
        </div>
    </>
}
export default BuscarMedico