import React from 'react'
import './index.css'
import ButtonModal from './components/ButtonModal'
import CalendarSchedule from '../../componets/calendarSchedule'
import NavigationTo from '../../componets/NavigationTo'

const hours = new Array(12).fill(0).map((_, index) => ({ hour: `${index + 6}:00` }))

const HorarioDeAtencion = (props) => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" id="nav-color">
          <div>
            <div className="container">
              <NavigationTo href="/" id="link-header">
                Medico
              </NavigationTo>
              /
              <NavigationTo href="#" id="link-header">
                Editable
              </NavigationTo>
            </div>
            <div className="container">
              <h2 className="header_titles" id="letra">
                HORARIO DE ATENCION
              </h2>
            </div>
          </div>
        </nav>
      </div>
      <CalendarSchedule />
      {/* <div className="container mt-5 table-responsive text-center">
        <table className="table table-bordered mt-5">
          <tr>
            <th> Horas</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sabado</th>
            <th>Domingo</th>
          </tr>
          {hours.map(({ hour }, index) => {
            return (
              <tr key={index.toString()}>
                <td>{hour}</td>
                <td>
                  <ButtonModal />
                </td>
                <td>
                  <ButtonModal />
                </td>
                <td>
                  <ButtonModal />
                </td>
                <td>
                  <ButtonModal />
                </td>
                <td>
                  <ButtonModal />
                </td>
                <td>
                  <ButtonModal />
                </td>
                <td>
                  <ButtonModal />
                </td>
              </tr>
            )
          })}
        </table>
      </div> */}
    </>
  )
}

export default HorarioDeAtencion