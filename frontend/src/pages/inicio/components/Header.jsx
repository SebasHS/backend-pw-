import React from 'react'
import NavigationTo from '../../../componets/NavigationTo'

const Header = ({ nombreEmpresa = '' }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" id="nav-color">
        <div className="container-fluid">
          <div>
            <label className="form-label h2" id="letra">
              {nombreEmpresa}
            </label>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" />
              <NavigationTo
                className="nav-link active h5"
                aria-current="page"
                href="/datos-de-contacto"
                id="letra"
              >
                Datos de contacto y precio
              </NavigationTo>
              <li className="nav-item" />
              <NavigationTo
                className="nav-link active h5"
                aria-current="page"
                href="/horario-de-atencion"
                id="letra"
              >
                Horario de atencion
              </NavigationTo>
            </ul>
          </div>
          <div>
            <label className="form-label h5" id="letra">
              | NOMBRE MEDICO
            </label>
            <img
              src="https://images.vexels.com/media/users/3/151709/isolated/lists/098c4aad185294e67a3f695b3e64a2ec-icono-de-avatar-de-doctor.png"
              className="img-circle"
              alt="..."
              width="50px;"
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
