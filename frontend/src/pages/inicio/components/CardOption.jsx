import React from 'react'
import NavigationTo from '../../../componets/NavigationTo'

const CardOption = ({ href = '', tituloBoton = '', image = '' }) => {
  return (
    <div className="card">
      <div>
        <img src={image} className="card-img" height="200" alt="..." />
      </div>
      <div className="card-body">
        <div>
          <div className="row">
            <div className="col text-center">
              <button type="button" className="btn">
                <NavigationTo href={href}>{tituloBoton}</NavigationTo>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardOption
