import Calen_RCP from "./components/Calen_RCP"
import doctor from '../../assets/medico.png'
import "./index.css"
import NavigationTo from "../../componets/NavigationTo"
import Calendar from "../../componets/Calendar"

const Pagina_RCP = () => {
    return (
        <main>
            <section>
                <header>
                    <h2 className="header_titles">Horario</h2>
                </header>
            </section>
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
                </div>
            </section>
            <Calendar/>
            <section>
                <div className="register">
                    <NavigationTo href="/medios-de-pago"><button type="button" className="btn btn-success color-buttons" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Reservar cita</button></NavigationTo>
                </div>
            </section>
        </main>
    )
}
export default Pagina_RCP