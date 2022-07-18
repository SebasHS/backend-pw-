import React from 'react'
import NavigationTo from '../../componets/NavigationTo'
import './index.css'

const preguntas = new Array(5).fill(0).map((_, index) => ({
  id: `${index + 1}`,
  nombre: 'Nombre',
  apellido: 'Apellido',
  imagen: require('../../assets/1430453.png'),
  pregunta:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo quos rem atque commodi quis fugiat, natus culpa reprehenderit'
}))

const ItemPregunta = ({ nombre, apellido, imagen, pregunta }) => {
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
          <nav>{pregunta}</nav>
          <nav className="text-end pt-3">
            <a
              className="link"
              href=""
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              # respuestas
            </a>
          </nav>
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
                  <h2 className="modal-title offset-4" id="exampleModalLabel">
                    Respuestas
                  </h2>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="text-start mt-4 mb-4">
                    <label className="mb-4"> Respuesta de doctor 1:</label>
                    <div className="text-center">
                      <textarea
                        className="respuesta"
                        disabled
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis mauris sit amet mauris ultrices consectetur. Nam eleifend tempor felis eget feugiat. Nullam id venenatis risus, in aliquet dui. In a sem eu eros tincidunt scelerisque id vitae urna. Nulla in velit vitae sem blandit euismod. Nam bibendum quis mauris vitae eleifend. Nullam feugiat dolor ut laoreet posuere. Fusce tortor nisl, ullamcorper eget egestas quis, lacinia quis mauris. Morbi posuere dolor ut risus ornare cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum posuere eget sapien ac pellentesque. Sed placerat imperdiet eros, nec porta."
                        id="comentario"
                        cols="50"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-start mt-5 mb-4">
                    <label className="mb-4"> Respuesta de doctor 2:</label>
                    <div className="text-center">
                      <textarea
                        className="respuesta"
                        disabled
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis mauris sit amet mauris ultrices consectetur. Nam eleifend tempor felis eget feugiat. Nullam id venenatis risus, in aliquet dui. In a sem eu eros tincidunt scelerisque id vitae urna. Nulla in velit vitae sem blandit euismod. Nam bibendum quis mauris vitae eleifend. Nullam feugiat dolor ut laoreet posuere. Fusce tortor nisl, ullamcorper eget egestas quis, lacinia quis mauris. Morbi posuere dolor ut risus ornare cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum posuere eget sapien ac pellentesque. Sed placerat imperdiet eros, nec porta."
                        id="comentario"
                        cols="50"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
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
        </div>
      </div>
      <div className="row">
        <div className="text-end">
          <button
            type="button"
            className="btn btn-info btnResponder mb-3  ms-3 me-3"
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

const PreguntasPublicas = (props) => {
  return (
    <>
      <div id="rectanguloEncabezado">
        <div className="fs-5 ms-4">
          <NavigationTo className="link" href="/inicio">
            Principal
          </NavigationTo>
          /
          <NavigationTo className="link" href="#">
            Preguntas públicas de pacientes
          </NavigationTo>
        </div>
        <div className="col mb-2 ms-4 fw-bold fs-1">PREGUNTAS DE PACIENTES</div>
      </div>

      <div className="rectangulosCuerpo">
        <div className="fs-3 m-4 fw-bold">Preguntas Públicas</div>

        {preguntas.map((pregunta) => {
          return <ItemPregunta key={pregunta.id} {...pregunta} />
        })}
      </div>
    </>
  )
}

export default PreguntasPublicas
