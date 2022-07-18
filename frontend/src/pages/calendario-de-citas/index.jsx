/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.css'

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
        <div className="btn_cal_citas">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00838F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-arrow-left-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 8 8 12 12 16" />
              <line x1="16" y1="12" x2="8" y2="12" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00838F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-arrow-right-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 16 16 12 12 8" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </a>
        </div>
        <div className="cal_citas_main">
          <table className="table cal_citas table-bordered ">
            <div>
              <p className="header_subtitles center_month">MAYO</p>
            </div>
            <thead>
              <tr>
                <th scope="col">Lun</th>
                <th scope="col">Mar</th>
                <th scope="col">Mié</th>
                <th scope="col">Jue</th>
                <th scope="col">Vie</th>
                <th scope="col">Sab</th>
                <th scope="col">Dom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="dif_month">30</td>
                <td className="dif_month">31</td>
                <td className="btn_active">
                  1
                  <a
                    href="#"
                    className="ver"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00838F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-eye"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </a>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Miercoles
                          </h5>
                        </div>
                        <div className="modal-body">
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  6:00
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="list-group">
                                    <a
                                      href="/info_pac_med/info_pac_med.html"
                                      className="list-group-item list-group-item-action active"
                                      aria-current="true"
                                    >
                                      Paciente 1
                                    </a>
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Paciente 2{' '}
                                    </a>
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Paciente 3
                                    </a>
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Paciente 4
                                    </a>
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action disabled"
                                      tabindex="-1"
                                      aria-disabled="true"
                                    >
                                      No disponible
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingTwo">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  7:00
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="list-group">
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action active"
                                      aria-current="true"
                                    >
                                      Paciente 1
                                    </a>
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Paciente 2{' '}
                                    </a>
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Paciente 3
                                    </a>
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Paciente 4
                                    </a>
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action disabled"
                                      tabindex="-1"
                                      aria-disabled="true"
                                    >
                                      No disponible
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingThree">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  8:00
                                </button>
                              </h2>
                              <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="list-group">
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action active"
                                      aria-current="true"
                                    >
                                      Paciente 1
                                    </a>
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Paciente 2{' '}
                                    </a>
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Paciente 3
                                    </a>
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action"
                                    >
                                      Paciente 4
                                    </a>
                                    <a
                                      href="#"
                                      className="list-group-item list-group-item-action disabled"
                                      tabindex="-1"
                                      aria-disabled="true"
                                    >
                                      No disponible
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
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
                </td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
              </tr>
              <tr>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
              </tr>
              <tr>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
              </tr>
              <tr>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td className="dif_month">1</td>
                <td className="dif_month">2</td>
                <td className="dif_month">3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default PreguntasPacientes
