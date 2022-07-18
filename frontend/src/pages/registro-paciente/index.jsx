import React from 'react'
import { Formik } from 'formik'
import './index.css'
import Input from '../../componets/Input'
import NavigationTo from '../../componets/NavigationTo'
import useAutentication from '../../hooks/useAutentication'
import useAppContext from '../../hooks/useAppContext'



const RegistroPaciente = (props) => {
  const { registroPaciente } = useAutentication()
  const { setLoading } = useAppContext()
  const onSubmit = async (values, helpers) => {
    try {
      setLoading(true)
      await registroPaciente(values)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <Formik
      initialValues={{
        document: '',
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        numContacto: '',
        imagen: '',
        email: '',
        password: ''
      }}
      onSubmit={onSubmit}
    >

{({ handleSubmit, handleChange, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-header fondocabecera">
                <h1 className="perfil_login">EMPRESA XYZ</h1>
              </div>
            </div>
            <div className="row">
              <div className="col mx-4">
                <div className="container aislarcontenido borde mt-5 mb-3 color_letra">
                  <h1 className="text-center pt-3">Registro Paciente</h1>
                  <Input
                    label={'Nombre :'}
                    onChange={handleChange('nombre')}
                    value={values.nombre}
                  />
                  <Input
                    label={'Apellido P. :'}
                    onChange={handleChange('apellidoPaterno')}
                    value={values.apellidoPaterno}
                  />
                  <Input
                    label={'Apellido M. :'}
                    onChange={handleChange('apellidoMaterno')}
                    value={values.apellidoMaterno}
                  />
                  <Input
                    label={'Email :'}
                    onChange={handleChange('email')}
                    value={values.email}
                    type="email"
                  />
                  <Input
                    label={'Num. Documento'}
                    onChange={handleChange('document')}
                    value={values.document}
                  />
                  <Input
                    label={'Contraseña :'}
                    onChange={handleChange('password')}
                    value={values.password}
                    type="password"
                  />
                  <Input
                    label={'Confirmar contraseña :'}
                    onChange={handleChange('passwordConfirm')}
                    value={values.passwordConfirm}
                    type="password"
                  />

                  <div className="row align-items-center justify-content-center pt-5 pb-2">
                    <div className="d-grid gap-2 col-sm-2 mb-3">
                      <input className="btn btn-success" type="submit"></input>
                    </div>
                    <div className="d-grid gap-2 col-sm-2 mb-3">
                      <NavigationTo
                        className="btn btn-danger"
                        href="/login"
                        role="button"
                      >
                        Cancelar
                      </NavigationTo>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}

export default RegistroPaciente
