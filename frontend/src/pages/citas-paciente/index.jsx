import Main_CP from "./components/Main_CP"
import React from 'react'
import './index.css'
import NavigationTo from "../../componets/NavigationTo"

const Historial = [
    {   medico:"Dr. AUGEDA PACHECO, GABRIEL",
        paciente:"GOMEZ TORRES, LUCIA",
        fechaProgramada:"DD MM YY",
        hora:"Hora", 
        fechaLlegada:"DD MM YY",
        hora:"Hora", 
        especialidad: "TRAUMATOLOGIA",
    },
    {   medico:"Dr. FERNANDEZ RAMIREZ, RAUL",
        paciente:"GOMEZ TORRES, LUCIA",
        fechaProgramada:"DD MM YY",
        hora:"Hora", 
        fechaLlegada:"DD MM YY",
        hora:"Hora", 
        especialidad: "PEDIATRIA",
    },
    {   medico:"Dr. AUGEDA PACHECO, GABRIEL",
        paciente:"GOMEZ TORRES, LUCIA",
        fechaProgramada:"DD MM YY",
        hora:"Hora", 
        fechaLlegada:"DD MM YY",
        hora:"Hora", 
        especialidad: "TRAUMATOLOGIA",
    }]

const ArmarBody = () => {
    const ListaCita = []
    Historial.forEach((cita,index) => {
        ListaCita.push(
            <Main_CP key={`${index}`} cita = {cita}/>
        )
    })
    return ListaCita
}


const Pagina_CP = () => {
    return<>
    <div id="fondo">
    <div className="card">
            <div className="card-header" id="encabezadoCita">
                <h4>
                    <div>
                        <NavigationTo href="/inicio-paciente">Principal</NavigationTo>
                        /
                        <NavigationTo href="#">Mis citas</NavigationTo>
                    </div>
                </h4>
                <h1 id="LetraCita">MIS CITAS</h1>
            </div>
        </div>
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm">
                    <div className="row mt-2">
                        <div className="col-sm-6" > 
                            <label className="form-label" id="Label2">Buscar</label>
                          <input type="text" className="form-control" id="cuadroLleno"/>
                        </div>

                        <div className="col-sm-3"> 
                            <label className="form-label" id="Ocultar">M</label>
                          <input type="text" className="form-control" id="Ocultar"  disabled/>
                        </div>

                        <div className="col-sm-3" id="mostrar" > 
                            <label className="form-label" id="mostrar 1">Mostrar</label>
                          <input type="number" className="form-control" id="cuadroLleno" min="0"/>
                        </div>

                      </div>

                    <div className="card-body table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Médico</th>
                                        <th>Paciente</th>
                                        <th>Fecha Programada</th>
                                        <th>Fecha Llegada</th>
                                        <th>Especialidad</th>
                                        <th className="text-center">X</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ArmarBody()}
                                </tbody>
                            </table>

                            <nav>
                                <ul className="pagination mt-5">
                                      <li className="page-item disabled">
                                          <a className="page-link" href="#" id="cuadroLleno" >Anterior</a>   
                                      </li>
                                      <li className="page-item active" >
                                          <a className="page-link" href="#">1</a>   
                                      </li>
                                      <li className="page-item">
                                          <a className="page-link" id="cuadroLleno"  href="#">Siguiente</a>   
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

export default Pagina_CP
