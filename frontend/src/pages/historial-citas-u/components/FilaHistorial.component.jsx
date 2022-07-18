import medico from "../../../assets/medico.png"
import estrella from "../../../assets/estrella.png"
const FilaHistorial = (props) => {
    return <>
    <tr>
        <td>
            <div>
                {props.historia.medico}
            </div>
            <div>
                {props.historia.especialidad}
            </div>
        </td>
        <td>{props.historia.paciente}</td>
        <td>
            <div>
                {props.historia.fecha}
            </div>
            <div>
                {props.historia.hora}
            </div>
        </td>
        <td>
            {props.historia.diagnostico}
        </td>
        <td>
            {props.historia.receta}
        </td>
        <td className="tdEstrella">
            <input type="image" src={estrella} className="btn imgEstrella btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"></input>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Puntuar Cita</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col text-end" id="divImgMedico">
                                            <img className="imgMedico" src={medico} alt="Foto medico"></img>
                                        </div>
                                        <div className="col-5">
                                            <div className="fs-4 fw-bold">{props.historia.medico}:</div>
                                            <div>
                                                <span className="fs-4">Especialidad:</span>
                                                &nbsp;
                                                <span className="fs-5">{props.historia.especialidad}</span>
                                            </div>
                                            <div className="fs-4">Calificar:</div>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-3 divEstrellas">
                                <span className="fa fa-star" id="estrella1"></span>
                                <span className="fa fa-star" id="estrella2"></span>
                                <span className="fa fa-star" id="estrella3"></span>
                                <span className="fa fa-star" id="estrella4"></span>
                                <span className="fa fa-star" id="estrella5"></span>
                            </div>
                            <div className="text-center mt-4">
                                <textarea placeholder="Añadir comentario (opcional)" id="comentario" cols="50" rows="5"></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary btnModal" data-bs-dismiss="modal">Guardar puntuación</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </td>
    </tr>
    </>
}
export default FilaHistorial