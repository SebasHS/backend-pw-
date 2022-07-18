import React from 'react'
import './index.css'
import BodyPM from "./components/BodyPM"
import foto from "../../assets/medico.png"
import NavigationTo from '../../componets/NavigationTo'

//comment prueba 
const PuntuarMedico = () => {
    return <>
        <div className="card mb-5" id="encabezado">
            <div className="card-header">
                <div className="fs-5 ms-2">
                    <NavigationTo className="nave ms-4" href="/inicio-paciente" id="letra">
                        Principal /
                    </NavigationTo>
                        /
                    <NavigationTo className="link" href="/buscar-medico">Buscar Médico</NavigationTo>
                        /
                    <NavigationTo className="link" href="#">Puntuar Médico</NavigationTo>
                </div>
                <div className="mt-2 mb-2 ms-2 fw-bold fs-1">
                    EMPRESA XYZ
                </div>
            </div>
        </div>

        <BodyPM medico={"medico"} foto={foto} />

    </>
}

export default PuntuarMedico