import React from 'react'
import NavigationTo from '../../componets/NavigationTo'
import './index.css'

const buzon = new Array(10).fill(0).map((_, index) => ({
    id: `${index + 1}`,
    asunto: `${index + 1}`,
    nombre: 'Ross',
    apellido: 'Geller',
    fecha: "18/07/2022",
    mensaje:
      'Este es un mensaje de la pantalla buzon privado'
}))

const ItemBuzon = ({asunto, nombre, apellido, fecha, mensaje}) => {
    return(
        <tr>
            <td>{asunto}</td>
            <td>
                {apellido}, {nombre}
            </td>
            <td>{fecha}</td>
            <td className="diagnostico_body">
                {mensaje}
            </td>
        </tr>
    )
}

const Pagina_BUZ = (props) => {
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
                                Buzón Privado
                            </NavigationTo>
                        </div>
                        <div className="ms-4">
                            <span className="navbar-brand h1" id="letra3">Buzón Privado</span>
                        </div>
                    </div>
                </nav>
            </section>

            <section>
                <div>
                    <div className="d-flex row justify-content-between">
                        <div className="col"><NavigationTo href="/mensajes-privados"><button id="button_id" type="button" className="btn btn-btn-primary btn-lg color-buttons">Crear Mensaje</button></NavigationTo></div>
                        <div className="col d-flex flex-row-reverse"><NavigationTo href="/inicio-paciente"><button id="button_id" type="button" className="btn btn-primary btn-lg color-buttons">Regresar</button></NavigationTo> </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container fondo_card" >
                    <div className="card mt-2 fondo_card ">
                        <div className="card-body fondo_card searchshow_card table-responsive d-flex">
                            <div className="col-md-3 me-auto">
                                <label className="form-label label_color">Buscar:</label>
                                <input id="col11" type="text" className="form-control" />
                            </div>
                            <div className="col-md-1">
                                <label className="form-label label_color">Mostrar</label>
                                <div className="dropstart">
                                    <a className="btn btn-secondary dropdown-toggle color-buttons" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        5
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">6</a></li>
                                        <li><a className="dropdown-item" href="#">8</a></li>
                                        <li><a className="dropdown-item" href="#">10</a></li>
                                    </ul>
                                </div>
                                <label className="form-label label_color">Filas</label>
                            </div>
                        </div>
                        <div className="table-responsive pe-4 fondo_card">
                            <table className="table text-center fondo_card letra2 ">
                                <thead>
                                <tr>
                                    <th>Asunto</th>
                                    <th>Remitente</th>
                                    <th>Fecha de Atención</th>
                                    <th className="diagnostico_head" >Mensaje</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {buzon.map((asunto) => {
                                    return <ItemBuzon key={asunto.id} {...asunto} />
                                    })}
                                </tbody>
                            </table>

                        </div>
                        <div className="container fondo_card pb-3">
                            <nav>
                                <ul className="pagination mb-0">
                                    <li className="page-item">
                                        <a className="page-link color-buttons-other" href="#">Antes</a>
                                    </li>
                                    <li className="page-item active color-buttons">
                                        <a className="page-link color-buttons" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link color-buttons-other" href="#">Siguiente</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
export default Pagina_BUZ