import doctor from '../../assets/medico.png'
import "./index.css"
import NavigationTo from "../../componets/NavigationTo"
import Calendar from '../../componets/Calendar'

const Pagina_RCM = () => {
    return (
        <main>
            <section>
                <header>
                    <h2 className="header_titles">Horario</h2>
                </header>
            </section>
            <section>
                <div className="btn_retroceder">
                    <NavigationTo href="/info-paciente-medico">
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
                </div>
            </section>
            <Calendar/>
            <section>
                <div className="register">
                    <button type="button" className="btn btn-success color-buttons" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Reservar cita</button>
                </div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header justify-content-center flex-column">
                                <h5 className="modal-title" id="staticBackdropLabel">Cita reservada con exito</h5>
                                <h6 className="modal-title" id="staticBackdropLabel">Imprimiendo boleta. . .</h6>
                            </div>
                            <div className="modal-footer flex-row">
                                <NavigationTo href="/inicio"><button type="button" className="btn btn-success" data-bs-dismiss="modal">Cerrar</button></NavigationTo>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Pagina_RCM