import React from 'react'

export default function Modal({ title = 'Aviso', message = ' ' }) {
  return (
    <div class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              {title}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Cerrar
            </button>
            <button type="button" class="btn btn-primary">
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
