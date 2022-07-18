import React, { useState } from 'react'
import NavigationTo from '../../componets/NavigationTo'
import './index.css'


const Pagina_MPRIV = () => {
    const [Preguntas,SetPregunta]=useState({
        dniPaciente : '',
        nombreDoctor: '',
        asunto: '',
        mensaje: ''
    })
    const {dniPaciente,nombreDoctor,asunto,mensaje} = Preguntas;

    const onInputChange = e => {SetPregunta({
        ...Preguntas,[e.target.name]:e.target.value
    })}


    // const onSubmit = async e => {
    //     await fetch("https://grupo6-backend-pw.herokuapp.com/foro",{
    //         method: "POST",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(
    //             {
    //                 CO_USR: 1,
    //                 FORO_TIT: pregunta["FORO_TIT"],
    //                 FORO_DESC: pregunta["FORO_DESC"] 
    //             }
    //         )
    //     })
    // };
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
                                Preguntas Privados
                            </NavigationTo>
                        </div>
                        <div className="ms-4">
                            <span className="navbar-brand h1" id="letra3">Crear Mensaje Privado</span>
                        </div>
                    </div>
                </nav>
            </div>

            <div>
                <div className="container button_mpriv_row_rev">
                    <NavigationTo href="/inicio-paciente" >
                        <button id="button_id" type="button" className="btn btn-outline-dark btn-lg color-buttons"> Regresar</button>
                    </NavigationTo>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="border border-dark borde" id="caja" >

                        <div id="columnas_superiores" className="row" >
                            <div className="col">
                                De:  <input id="col11" type="text" placeholder="" value={dniPaciente} onInputChange={e=>onInputChange(e)}/>
                            </div>
                            <div className="col">
                                Para:  <input id="col11" type="text" placeholder="" value={nombreDoctor} onInputChange={e=>onInputChange(e)}/>
                            </div>
                            <div className="col d-flex flex-row-reverse" id="last_col" >
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
                            <NavigationTo href="/buzon" > <button id="sent" type="button" className="btn btn-primary btn-lg color-buttons" >Enviar Mensaje</button></NavigationTo>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    )
}
export default Pagina_MPRIV