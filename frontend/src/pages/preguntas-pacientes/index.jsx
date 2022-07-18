import React from 'react'
import './index.css'
import NavigationTo from '../../componets/NavigationTo'

const preguntas = new Array(5).fill(0).map((_, index) => ({
  id: `${index + 1}`,
  nombre: 'Nombre',
  apellido: 'Apellido',
  imagen: require('../../assets/1430453.png'),
  pregunta:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo quos rem atque commodi quis fugiat, natus culpa reprehenderit'
}))

const ItemPregunta = ({ imagen, pregunta, nombre, apellido }) => {
  return (
    <div className="pregunta">
      <div className="row ms-4 me-4 mt-2">
        <div className="col nombres">
          {nombre} {apellido}
        </div>
        <div className="col text-center">
          <img className="imgPaciente" src={imagen} alt="Foto Perfil del Paciente" />
        </div>
        <div className="col-8">
          <div>Pregunta:</div>
          {pregunta}
        </div>
      </div>
      <div className="row">
        <div className="text-end">
          <button
            type="button"
            className="btn btn-info btnResponder m-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Responder
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Responder Pregunta:
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
                      placeholder="Añadir respuesta"
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
                      Guardar respuesta{' '}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PreguntasPacientes = (props) => {
  return (
    <>
      <div id="rectanguloEncabezado">
        <div className="fs-5 ms-4">
          <NavigationTo href="/inicio">Médico</NavigationTo>
          /
          <NavigationTo className="link" href="#">
            Preguntas privadas de pacientes
          </NavigationTo>
        </div>
        <div className="col mb-2 ms-4 fw-bold fs-1">PREGUNTAS DE PACIENTES</div>
      </div>

      <div className="rectangulosCuerpo">
        <div className="fs-3 m-4 fw-bold">Preguntas Privadas</div>
        {preguntas.map((pregunta) => {
          return <ItemPregunta key={pregunta.id} {...pregunta} />
        })}
      </div>
    </>
  )
}

export default PreguntasPacientes
