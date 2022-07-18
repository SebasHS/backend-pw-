const Main_CP = (props) => {
    return <>
        <tr>
            <td>{props.cita.medico}</td>
            <td>{props.cita.paciente}</td>
            <td>
                <div>
                    {props.cita.fechaProgramada}
                </div>
                <div>
                    {props.cita.hora}
                </div>
            </td>
            <td>
                <div>
                    {props.cita.fechaLlegada}
                </div>
                <div>
                    {props.cita.hora}
                </div>
            </td>

            <td>
                {props.cita.especialidad}
            </td>
            <td>
                <a href="#openModal">Anular</a>
                <div id="openModal" className="modalDialog">
                    <div >
                        <div className="card">
                            <div className="card-header mt-4" id="encabezadoCita">
                                <a href="#close" title="Close" className="close">X</a>
                                <h1>¡Advertencia!</h1>
                            </div>
                            <div className="card-body">
                                <div className="mt-4" id="modalAdv">
                                    ¿Seguro que deseas cancelar su cita?
                                </div>
                                <div id="modalAdv" className="mt-1">
                                    La devolución se verá reflejada en su tarjeta 30 días hábiles cancelada su cita.
                                </div>
                                <div id="Boton">
                                    <button id="BotonAceptar" className="mt-5 mb-4 btn btn--outline-secondary" type="button">
                                        <a href="#" id="LetraBoton">Aceptar</a>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </td>
        </tr>
    </>
}

export default Main_CP