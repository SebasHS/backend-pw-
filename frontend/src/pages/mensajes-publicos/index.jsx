import React, { useState } from 'react'
import './index.css'
import NavigationTo from '../../componets/NavigationTo'

const Pagina_MPUB = () => {
    const [Preguntas,SetPregunta]=useState({
        dniPaciente : '',
        asunto: '',
        mensaje: ''
    })
    const {dniPaciente,asunto,mensaje} = Preguntas;

    const onInputChange = e => {SetPregunta({
        ...Preguntas,[e.target.name]:e.target.value
    })}

    return (
        <main>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" id="nav-color">
                    <div>
                        <div>
                            <NavigationTo className="nave ms-4" href="/inicio-paciente" id="letra">
                                Paciente /
                            </NavigationTo>
                            <NavigationTo className="nave" href="#" id="letra">
                                Preguntas Públicas
                            </NavigationTo>
                        </div>
                        <div className="ms-4">
                            <span className="navbar-brand h1" id="letra3">Crear Mensaje Público</span>
                        </div>
                    </div>
                </nav>
            </div>

            <section>
                <div className="container button_mpub_row_rev">
                    <NavigationTo href="/bandejas">
                        <button id="button_id" type="button" className="btn btn-btn-primary btn-lg color-buttons" >Retroceder</button>	</NavigationTo>
                </div>
                <div className="container">
                    <div className="border border-dark borde" id="caja" >

                        <div id="columnas_superiores" className="row" >
                            <div className="col">
                                De:  <input id="col11" type="text" placeholder="" value={dniPaciente} onInputChange={e=>onInputChange(e)}/>
                            </div>
                            <div className="col d-flex flex-row-reverse antifrr" id="last_col" >
                                <input id="col11" type="date" placeholder="" />
                            </div>
                        </div>

                        <div id="asunto_text" >Asunto: <input id="asunto_box" type="text" placeholder="" value={asunto} onInputChange={e=>onInputChange(e)}/>
                        </div>

                        <div>
                            <h1 id="tam_h1" >Redacte</h1>
                        </div>

                        <div  >
                            <textarea id="texto_escrbir" rows="10" cols="30" value={mensaje} onInputChange={e=>onInputChange(e)}>
                            </textarea>
                        </div>

                        <div id="pre_Sent color-buttons" >
                            <NavigationTo href="/bandejas" > <button id="sent" type="button" className="btn btn-primary btn-lg color-buttons" >Enviar Mensaje</button></NavigationTo>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}
export default Pagina_MPUB