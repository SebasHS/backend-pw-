import HistMed_IPM from "./components/HistMed_IPM"
import React from 'react'
import './index.css'
import NavigationTo from "../../componets/NavigationTo"


const Pagina_IPM = () => {
    return (
        <div>
            <header>
                <div className="header_subtitles">
                    <NavigationTo href="/inicio">Médico</NavigationTo>
                    /
                    <NavigationTo href="/calendario-de-citas">Calendario de citas</NavigationTo>
                    /
                    <NavigationTo href="#">Información del paciente</NavigationTo>
                </div>
                <h2 className="header_titles">INFORMACIÓN DEL PACIENTE</h2>
            </header>
            <main>
            <section>
                {/* <div className="info_pac_med">
                <div className="input-group input-group-sm mb-3 ig">
                    <span className="input-group-text color-buttons" id="inputGroup-sizing-sm">Nombre</span>
                    <input className="form-control" type="text" placeholder="Taco, Jimenez" aria-label="Disabled input example" disabled/>
                </div>
                <div className="input-group input-group-sm mb-3 ig">
                    <span className="input-group-text color-buttons" id="inputGroup-sizing-sm">DNI</span>
                    <input className="form-control" type="text" placeholder="72891968" aria-label="Disabled input example" disabled/>
                </div>
                <div className="input-group input-group-sm mb-3 ig">
                    <span className="input-group-text color-buttons" id="inputGroup-sizing-sm">Correo</span>
                    <input className="form-control" type="text" placeholder="angelotacoj@gmail.com" aria-label="Disabled input example" disabled/>
                </div>
            </div> */}
            <div className="mt-5">
                <div  className="extra_info_pac_med">
                    <span>Notas extra de la atención: </span>
                    <div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea"></label>
                        </div>
                    </div>
                </div>
                <div  className="extra_info_pac_med">
                    <span>Diagnostico: </span>
                    <div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea"></label>
                        </div>
                    </div>
                </div>
                <div  className="extra_info_pac_med">
                    <span>Receta: </span>
                    <div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea"></label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                <HistMed_IPM/>
            </main>
        </div>
    )
}

export default Pagina_IPM