import React from 'react'

const ButtonModal = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Agregar
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
                Tipo de atención
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" for="inlineRadio1">
                  Presencial
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineRadio2">
                  Virtual
                </label>
              </div>
            </div>
            <div className="container">
              <label>*Link en caso la cita sea virtual</label>
            </div>
            <div className="container form-floating mt-4 mb-2">
              <input type="email" className="form-control" id="floatingInput" />
              <label for="floatingInput">Ej. Zoom, Teams, Meet, etc.</label>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ButtonModal
