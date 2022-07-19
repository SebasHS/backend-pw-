import React from 'react'
import NavigationTo from '../../componets/NavigationTo'
import { Formik } from 'formik'
import './index.css'
import Input from '../../componets/Input'
import useAppContext from '../../hooks/useAppContext'
import useAutentication from '../../hooks/useAutentication'

const Login = (props) => {
  const { setLoading } = useAppContext()
  const { login } = useAutentication()

  const onSubmit = async (values, helpers) => {
    setLoading(true)
    try {
      await login(values)
    } catch (error) {
      console.log('error', error)
    }
    setLoading(false)
  }

  return (
    <Formik initialValues={{ document: '', password: '' }} onSubmit={onSubmit}>
      {({ handleSubmit, values, handleChange }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="card-sm fondo">
              <div className="card-header fondocabecera">
                <h1 className="perfil_login">EMPRESA XYZ</h1>
              </div>
            </div>
            <div className="container aislarcontenido borde mt-10 mb-5 color_letra">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <NavigationTo className="nav-link fs-5" href="/registro-paciente">
                    Registro Paciente
                  </NavigationTo>
                </li>
                <li className="nav-item">
                  <NavigationTo className="nav-link fs-5" href="/registro-medico">
                    Registro Medico
                  </NavigationTo>
                </li>
              </ul>
              <div className="row justify-content-center align-items-center pt-5">
                <Input
                  label={'Documento'}
                  value={values.document}
                  // placeholder="Documento"
                  onChange={handleChange('document')}
                />
              </div>
              <div className="row align-items-center justify-content-center pt-5">
                <Input
                  label={'Contraseña'}
                  value={values.password}
                  // placeholder="Contraseña"
                  onChange={handleChange('password')}
                  type="password"
                />
              </div>
              <div className="row align-items-center justify-content-center pt-2">
                <div className="col-sm-6">
                  <NavigationTo className="fs-5" href="/recuperar-contrasena">
                    ¿Olvido su contraseña?
                  </NavigationTo>
                </div>
              </div>
              <div className="row pt-5 pb-5">
                <div className="d-grid gap-2 col-sm-2 mx-auto">
                  <input className="btn btna btn-success me-md-2 fs-3" type={'submit'} />
                </div>
              </div>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}

export default Login
