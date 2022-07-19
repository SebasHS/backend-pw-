import CalDoc_ID from "./components/CalDoc_ID"
import ComDoc_ID from "./components/ComDoc_ID"
import React from 'react'
import mail from '../../assets/mail.png'
import doctor from '../../assets/medico.png'
import './index.css'
import NavigationTo from "../../componets/NavigationTo"
import Calendar from '../../componets/Calendar.jsx'

const bandeja = new Array(1).fill(0).map((_, index) => ({
    id: `${index + 1}`,
        medico:"Dr. DE LAS CASAS, NICOLAS",
        ubicacion:"Ubicación: LAS LOMAS",
        especialidad: "Especialidad: TRAUMATOLOGIA",
        tipoAtencion: "Presencial",
        precioConsulta: "100"
}))

const CardDoctor = ({medico, especialidad, ubicacion }) =>{
    return(
            <div className="card_info">
                        <span>
                            <div className="card_info_img">
                                <img src={doctor} alt="" />
                            </div>
                        </span>
                        <span>
                            <div>{medico}</div>
                            <div>{especialidad}</div>
                            <div>{ubicacion}</div>
                        </span>
                        <span>
                            <NavigationTo href="/mensajes-privados">
                                <div className="card_info_msg">
                                    <img src={mail} alt="" />
                                </div>
                            </NavigationTo>
                        </span>
            </div>        
    )
}

const DatosDoc = ({tipoAtencion, precioConsulta}) =>{
    return(
        <div className="card_prices">
            <div>
                <span>Tipo de atención: </span>
                <span className="ms-5">{tipoAtencion}</span>
            </div>
            <div>
                <span>Precio de consulta:</span>
                <span className="ms-5">{precioConsulta}</span>
            </div>
        </div>
    )
}

const Pagina_ID = () => {
    return (
        <section>
            <header>
                <div className="header_subtitles">
                    <NavigationTo className="link" href="/inicio-paciente">Principal</NavigationTo>
                    /
                    <NavigationTo href="/buscar-medico">Buscar médico</NavigationTo>
                    /
                    <NavigationTo href="#">Nombre del médico</NavigationTo>
                </div>
                <h2 className="header_titles">Información del médico</h2>
            </header>
            <main>
                <section>
                    <div className="btn_retroceder">
                        <NavigationTo href="buscar-medico">
                            <button type="button" className="btn btn-secondary color-buttons">Retroceder</button>
                        </NavigationTo>
                    </div>
                    {bandeja.map((pregunta) => {
                    return <CardDoctor key={pregunta.id} {...pregunta} />
                    })}
                    {bandeja.map((pregunta) => {
                    return <DatosDoc key={pregunta.id} {...pregunta} />
                    })}
                </section>
                <Calendar/>
                {/* <CalDoc_ID /> */}
                <ComDoc_ID />
            </main>
        </section>
    )
}
export default Pagina_ID