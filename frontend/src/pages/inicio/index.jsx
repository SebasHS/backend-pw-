import React from 'react'
import './index.css'
import CardFiltro from './components/CardFiltro'
import CardOption from './components/CardOption'
import CardPreguntasPublicas from './components/CardPreguntasPublicas'
import Header from './components/Header'
import useAthentication from '../../hooks/useAutentication'

const Inicio = () => {

  const {deslogear} = useAthentication()


  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CardPreguntasPublicas />
            <CardFiltro />
          </div>
          <div className="col-md">
            <div className="container card mt-4" id="card-color">
              <div id="columnas" className="container mt-2">
                <div>
                  <div className="row mt-3">
                    <div className="col-md">
                      <div>
                        <div className="card-body">
                          <div>
                            <CardOption
                              tituloBoton="Próximas citas"
                              href="/proximas-citas"
                              image={require('../../assets/proximas_citas.jpeg')}
                              
                            />
                          </div>
                          <div className="mt-4 mb-2">
                            <CardOption
                              tituloBoton="Historial citas"
                              href="/historial-de-citas"
                              image={require('../../assets/historial_citas.jpg')}
                            />
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md">
                      <div>
                        <div className="card-body">
                          <div>
                            <CardOption
                              tituloBoton="Calendario de citas"
                              href="/calendario-de-citas"
                              image={require('../../assets/calendario_citas.jpg')}
                            />
                          </div>
                          <div className="mt-4 mb-2">
                            <CardOption
                              tituloBoton="Preguntas de pacientes"
                              href="/preguntas-pacientes"
                              image={require('../../assets/preguntas_pacientes.jpg')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className='text-center btn' onClick = {()=> deslogear()}> cerrar sesion</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicio
