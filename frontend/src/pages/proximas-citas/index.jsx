import React, { useState } from 'react'
import './index.css'
import Header from './components/Header'
import useDoctorInfo from '../../hooks/useDoctorInfo'

const Cita = ({ nombre, fechaInicio, fechaFin, cita = {} }) => {
  const { paciente = {} } = cita
  return (
    <div className="container">
      <div className="row d-flex p-3" style={{ minHeight: 100 }}>
        <div class="col-sm">
          <div>Paciente:</div>
          <div>
            {paciente.nombre} {paciente.apellidoPaterno} {paciente.apellidoMaterno}
          </div>
        </div>
        <div class="col-sm">
          <div>Inicio: {fechaInicio}</div>
          <div>Fin: {fechaFin}</div>
        </div>
        <div class="col-sm">
          <a
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
            href=""
          >
            Enviar Mensaje
          </a>
        </div>
        <div class="col-sm">
          <a
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
            href=""
          >
            Enviar Recordatorio
          </a>
        </div>
      </div>
    </div>
  )
}

{
  /* <td>
{paciente.nombre} {paciente.apellidoPaterno} {paciente.apellidoMaterno}
</td>
<td>Inicio: {fechaInicio}</td>
<td>Fin: {fechaFin}</td>
<td>
<div>
  <a
    className="btn"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal2"
    href=""
  >
    Enviar Mensaje
  </a>
</div>
</td>
<td>
<div>
  <a
    className="btn"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal3"
    href=""
  >
    Enviar Recordatorio
  </a>
</div>
</td>
</tr> */
}

const Modals = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enviar Mensaje:
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center mt-4 mb-4">
                <textarea
                  placeholder="Añadir mensaje"
                  id="comentario"
                  cols="50"
                  rows="5"
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  className="btn btn-info btnResponder"
                  data-bs-dismiss="modal"
                >
                  Guardar mensaje{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Recordatorio enviado
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h1>¡Su recordatorio fue enviado con éxito!</h1>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const ProximasCitas = (props) => {
  const { doctor } = useDoctorInfo()
  const [searchText, setSeachText] = useState('')

  const proximasCitas = doctor?.proximasCitas?.filter((item) => {
    const paciente = item.cita?.paciente
    const text =
      `${paciente?.nombre} ${paciente?.apellidoMaterno} ${paciente?.apellidoPaterno}`.toLowerCase()
    const textoBusqueda = searchText.toLowerCase()
    if (!textoBusqueda) {
      return true
    }
    return text.indexOf(textoBusqueda) !== -1
  })

  const onSearch = (text) => {
    setSeachText(text)
  }

  return (
    <>
      <Header />
      <div className="container mt-2">
        <div className="container card mt-2" id="fondo">
          <div className="card-body row" id="letra">
            <div className="col-md-3">
              <label className="form-label h4">Buscar:</label>
              <input
                type="text"
                className="form-control mt-2"
                value={searchText}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
            <div className="col-md-8"></div>
            <div className="col-md-1"></div>

            <div className="overflow-auto">
              {proximasCitas?.map((item) => {
                return <Cita key={item.id} {...item} />
              })}
            </div>
            {/* <div className="table-responsive">
              <table className="table text-center">
                <tr>
                  <th>Paciente</th>
                  <th>Fecha de Atención</th>
                </tr>

               
              </table>
            </div> */}
          </div>
        </div>
      </div>
      <Modals />
    </>
  )
}

export default ProximasCitas
