import React from 'react'
import './index.css'
import FilaHistorial from "./components/FilaHistorial.component"
import NavigationTo from '../../componets/NavigationTo'


const Historial = [{medico:"Dra. GOMEZ TORRES, LUCIA",especialidad:"NEFROLOGÍA",paciente:"QUISPE AGUILAR, MARTIN",fecha:"DD MM YY",
hora:"Hora",diagnostico:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",receta:"Lorem ipsum dolor sit amet consectetur adipisicing elit"},
{medico:"Dra. GOMEZ TORRES, LUCIA",especialidad:"NEFROLOGÍA",paciente:"QUISPE AGUILAR, MARTIN",fecha:"DD MM YY",
hora:"Hora",diagnostico:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",receta:"Lorem ipsum dolor sit amet consectetur adipisicing elit"},
{medico:"Dra. GOMEZ TORRES, LUCIA",especialidad:"NEFROLOGÍA",paciente:"QUISPE AGUILAR, MARTIN",fecha:"DD MM YY",
hora:"Hora",diagnostico:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",receta:"Lorem ipsum dolor sit amet consectetur adipisicing elit"},
{medico:"Dra. GOMEZ TORRES, LUCIA",especialidad:"NEFROLOGÍA",paciente:"QUISPE AGUILAR, MARTIN",fecha:"DD MM YY",
hora:"Hora",diagnostico:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",receta:"Lorem ipsum dolor sit amet consectetur adipisicing elit"},
{medico:"Dra. GOMEZ TORRES, LUCIA",especialidad:"NEFROLOGÍA",paciente:"QUISPE AGUILAR, MARTIN",fecha:"DD MM YY",
hora:"Hora",diagnostico:"Lorem ipsum, dolor sit amet consectetur adipisicing elit",receta:"Lorem ipsum dolor sit amet consectetur adipisicing elit"}]

const ArmarTBody = () => {
    const ListaHistorias = []
    Historial.forEach((historia,index)=>{
        ListaHistorias.push(
            <FilaHistorial key={`${index}`} historia = {historia}/>
        )
    })
    return ListaHistorias
}


const HistorialCitas = () => {
    return <>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha385-AYmEC3Yw5cVb3ZcuHt0A93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        <div className="body">
            <div className="mb-5 encabezado">
                <div className="card-header encabezado">
                    <div className="fs-5 ms-2">
                        <NavigationTo className="link" href="/inicio-paciente">Principal</NavigationTo>
                        /
                        <NavigationTo className="link" href="/#">Historial Citas</NavigationTo>
                    </div>
                    <div className="mt-2 mb-2 ms-2 fw-bold fs-1">
                        HISTORIAL CITAS
                    </div>
                </div>
            </div>
            <div className="container-fluid rectangulo">
                <div className="row">
                    <div className="col">
                        <div className="row mt-2">
                            <div className="col-sm-2" >
                                <label className="form-label ms-1" id="Labels">Buscar:</label>
                                <input type="text" className="form-control cuadroLleno"></input>
                            </div>

                            <div className="col-sm-4">
                                <label className="form-label" id="Ocultar" hidden>M</label>
                                <input type="text" className="form-control" id="Ocultar" hidden disabled></input>
                            </div>
                            <div className="col-sm-3">
                                <label className="form-label" id="Ocultar" hidden>M</label>
                                <input type="text" className="form-control" id="Ocultar" hidden disabled></input>
                            </div>

                            <div className="col-sm-3" id="mostrar" >
                                <label className="form-label" id="mostrar 1">Mostrar</label>
                                <input type="number" className="form-control cuadroLleno" min="0"></input>
                            </div>
                        </div>

                        <div className="card-body table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className="encabezadosTabla">
                                        <th>Médico</th>
                                        <th>Paciente</th>
                                        <th>Fecha Atención</th>
                                        <th>Diagnóstico</th>
                                        <th>Medicinas Recetadas</th>
                                        <th>Puntuar cita</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ArmarTBody()}
                                </tbody>
                            </table>
                            <nav>
                                    <ul className="pagination mt-5">
                                          <li className="page-item disabled">
                                              <a className="page-link" href="#">Anterior</a>   
                                          </li>
                                          <li className="page-item active">
                                              <a className="page-link" href="#">1</a>   
                                          </li>
                                          <li className="page-item">
                                              <a className="page-link" href="#">Siguiente</a>   
                                          </li>
                                    </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default HistorialCitas