import medico from "../../../assets/medico.png"
import estrella from  "../../../assets/estrella.png"
import NavigationTo from "../../../componets/NavigationTo"
const Medico = (props) => {
    return <>
        <div className="col-4">
            <div className="rectangulosDoctor">
                <div className="divImgMedico text-center">
                    <img className="imgMedico" src={medico} alt="Doctor"></img>
                    <form method="get" action="/PuntuarMedico/PuntuarMedico.html">
                        <NavigationTo href="/puntuar-medico"><input type="image" src={estrella} className="btn imgEstrella btn-sm"></input></NavigationTo>
                    </form>
                </div>
                <div className="text-center">
                    <NavigationTo href="/informacion-medico">{props.medico.nombre}</NavigationTo>
                </div>
                <div className="divBtnCentrado">
                    <button className="btn btn-info m-1">{props.medico.especialidad}</button>
                </div>
                <div className="divBtnCentrado">
                    <form method="get" action="/registrar_cita_pac/registrar_cita.html">
                        <NavigationTo href="/registrar-cita-paciente"><button className="btn btn-info m-1">Ver horarios</button></NavigationTo>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Medico