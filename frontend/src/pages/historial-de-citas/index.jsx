import React from 'react'
import './index.css'
import { useState } from 'react';
import hc_1 from '../../assets/hc_1.jpg'
import hc_2 from '../../assets/hc_2.jpg'
import hc_3 from '../../assets/hc_3.jpg'
import NavigationTo from '../../componets/NavigationTo';

const HistorialDeCitas = (props) => {
  const [newImg, setNewImg] = useState(<img src={hc_1} alt=""/>)
    function Dia(){
        setNewImg(
            newImg => <img src={hc_1} alt=""/>
        )
    }
    function Semana(){
        setNewImg(
            newImg => <img src={hc_2} alt=""/>
        )
    }
    function Mes(){
        setNewImg(
            newImg => <img src={hc_3} alt=""/>
        )
    }
  return (
    <>
      <header>
        <div className="header_subtitles">
          <NavigationTo href="/inicio">Médico</NavigationTo>/<NavigationTo href="#">Historial de citas</NavigationTo>
        </div>
        <h2 className="header_titles">HISTORIAL DE CITAS</h2>
      </header>
      <main>
        <div className="btn_hist">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle color-buttons"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Frecuencia
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#" onClick={Dia}>Dia</a></li>
                <li><a className="dropdown-item" href="#" onClick={Semana}>Semana</a></li>
                <li><a className="dropdown-item" href="#" onClick={Mes}>Mes</a></li>
            </ul>
          </div>
        </div>
        <div className="gra_hist">
          {newImg}
        </div>
      </main>
    </>
  )
}

export default HistorialDeCitas
