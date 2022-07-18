import CalDoc_ID from "./components/CalDoc_ID"
import ComDoc_ID from "./components/ComDoc_ID"
import React from 'react'
import mail from '../../assets/mail.png'
import doctor from '../../assets/medico.png'
import './index.css'
import NavigationTo from "../../componets/NavigationTo"

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
                    <div className="card_info">
                        <span>
                            <div className="card_info_img">
                                <img src={doctor} alt="" />
                            </div>
                        </span>
                        <span>
                            <div>Dr. ROSS, GELLER</div>
                            <div>Especialidad: Neurocirugia</div>
                            <div>Ubicación de consulta: Manuel Olguin 1050</div>
                        </span>
                        <span>
                            <NavigationTo href="/mensajes-privados">
                                <div className="card_info_msg">
                                    <img src={mail} alt="" />
                                </div>
                            </NavigationTo>
                        </span>
                    </div>
                    <div className="card_prices">
                        <div>
                            <span>Tipo de atención: </span>
                            <span className="ms-5">Virtual</span>
                        </div>
                        <div>
                            <span>Precio de consulta:</span>
                            <span className="ms-5">50</span>
                        </div>
                    </div>
                </section>
                <CalDoc_ID />
                <ComDoc_ID />
            </main>
        </section>
    )
}
export default Pagina_ID