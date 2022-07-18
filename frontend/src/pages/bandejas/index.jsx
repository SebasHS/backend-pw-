import React from 'react'
import './index.css'
import user from '../../assets/1430453.png'
import NavigationTo from '../../componets/NavigationTo'

const bandeja = new Array(4).fill(0).map((_, index) => ({
    id: `${index + 1}`,
    nombre: 'Harry',
    apellido: 'Potter',
    pregunta:
      'Preguntas de mensajes publicos'
}))

const ItemPregunta = ({pregunta, nombre, apellido }) =>{
    return(
                    <div className="container card mt-2 " id="card-color">
                        <div className="card-body row borde" id="letra">
                            <div className="col-md-2">
                                <img src={user} className="img-circle" alt="..." width="150px;" />
                            </div>
                            <div className="col-md-10">
                                <label className="form-label h4">{nombre}     {apellido}</label>
                                <div>
                                    <label className="form-label h4 mt-3">{pregunta}</label>
                                </div>
                            </div>
                        </div>
                    </div>                    
    )
}

const Pagina_BAND = (props) => {
    return (
        <main>
            <section>
                <nav className="navbar navbar-expand-lg navbar-light" id="nav-color">
                    <div>
                        <div>
                            <NavigationTo className="nave ms-4" href="/inicio-paciente" id="letra">
                                Paciente /
                            </NavigationTo>
                            <NavigationTo className="nave" href="#" id="letra">
                                Preguntas /
                            </NavigationTo>
                            <NavigationTo className="nave" href="#" id="letra">
                                Bandeja pública
                            </NavigationTo>
                        </div>
                        <div className="ms-4">
                            <span className="navbar-brand h1" id="letra3">Bandeja pública</span>
                        </div>
                    </div>
                </nav>
            </section>

            <section>
                <div >
                    <div className="d-flex row justify-content-between">
                        <div className="col"><NavigationTo href="/mensajes-publicos"><button id="button_id" type="button" className="btn btn-btn-primary btn-lg color-buttons">Crear Mensaje</button></NavigationTo></div>
                        <div className="col d-flex flex-row-reverse"><NavigationTo href="/inicio-paciente"><button id="button_id" type="button" className="btn btn-primary btn-lg color-buttons">Regresar</button></NavigationTo> </div>
                    </div>
                </div>
            </section>
            <section>
                <div id="textt_h1" >
                    <h1>Bandeja</h1>
                </div>
                <div className="container mt-2">
                {bandeja.map((pregunta) => {
                return <ItemPregunta key={pregunta.id} {...pregunta} />
                })}
                </div>
            </section>

        </main>
    )
}
export default Pagina_BAND