/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import NavigationTo from '../../componets/NavigationTo'
import usePerfilService from '../../services/perfil'
import useAppContext from '../../hooks/useAppContext'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import './index.css'

const useProfile = () => {
  const [perfil, setPerfil] = useState()
  const { verPerfil, actualizarPerfil } = usePerfilService()

  const obtenerPerfil = async () => {
    const response = await verPerfil()
    setPerfil(response.data.data)
  }

  const _actualizarPerfil = async (data) => {
    await actualizarPerfil(data)
  }

  useEffect(() => {
    obtenerPerfil()
  }, [])

  return {
    perfil,
    obtenerPerfil,
    actualizarPerfil: _actualizarPerfil
  }
}

const Input = ({ label, onChange, value }) => {
  return (
    <>
      <label className="form-label mt-2 h5" id="letra">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="form-control mt-2 mb-2"
      />
    </>
  )
}

const DatosDeContacto = () => {
  const { perfil, actualizarPerfil } = useProfile()
  const { setLoading } = useAppContext()
  const navigation = useNavigate()

  const onSubmit = async (values, helper) => {
    setLoading(true)
    try {
      await actualizarPerfil(values)
      navigation('/')
    } catch (error) {
      alert(error.message)
    }
    setLoading(false)
  }

  if (!perfil) {
    return null
  }

  return (
    <Formik initialValues={{ ...perfil }} onSubmit={onSubmit}>
      {({ handleSubmit, values, handleChange }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <nav className="navbar navbar-expand-lg navbar-light" id="nav-color">
                <div>
                  <div className="container">
                    <NavigationTo href="/" id="link-header">
                      Medico
                    </NavigationTo>
                    /
                    <a href="#" id="link-header">
                      Editable
                    </a>
                  </div>
                  <div className="container">
                    <h2 className="header_titles" id="letra">
                      DATOS DE CONTACTO Y PRECIOS
                    </h2>
                  </div>
                </div>
              </nav>
            </div>
            <div className="container mt-3">
              <img
                src="https://images.vexels.com/media/users/3/151709/isolated/lists/098c4aad185294e67a3f695b3e64a2ec-icono-de-avatar-de-doctor.png"
                className="img-circle"
                alt="..."
                width="150px;"
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="card mt-3" id="card-color">
                    <div className="card-body">
                      <div className="form-label">
                        <label className="form-label h4 mt-2" id="letra">
                          Datos de contacto
                        </label>
                      </div>
                      <div>
                        <Input
                          label={'Email:'}
                          value={values.email}
                          onChange={handleChange('email')}
                        />

                        <Input
                          label={'Telefono'}
                          value={values.numContacto}
                          onChange={handleChange('numContacto')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mt-3" id="card-color">
                    <div className="card-body">
                      <div className="form-label">
                        <label className="form-label h4 mt-2" id="letra">
                          Precios de consulta
                        </label>
                      </div>
                      <Input
                        label={'Virtual:'}
                        value={values.doctor?.precioVirtual}
                        onChange={handleChange('doctor.precioVirtual')}
                      />
                      <Input
                        label={'Presencial:'}
                        value={values.doctor?.precioPresencial}
                        onChange={handleChange('doctor.precioPresencial')}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
                  <input className="btn btn-primary" type={'submit'}></input>
                </div>
              </div>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}

export default DatosDeContacto
