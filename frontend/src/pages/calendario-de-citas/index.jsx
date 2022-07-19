/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.css'
import Calendar from '../../componets/Calendar.jsx'

const PreguntasPacientes = (props) => {
  return (
    <>
      <header>
        <div className="header_subtitles">
          <a href="/">Médico</a>/<a href="#">Calendario de citas</a>
        </div>
        <h2 className="header_titles">Calendario de citas</h2>
      </header>
      <main>
        <Calendar/>
      </main>
    </>
  )
}

export default PreguntasPacientes
