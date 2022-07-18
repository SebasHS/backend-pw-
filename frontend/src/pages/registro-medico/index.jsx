import React from 'react'
import { Formik } from 'formik'
import './index.css'
import Input from '../../componets/Input'
import NavigationTo from '../../componets/NavigationTo'
import useAutentication from '../../hooks/useAutentication'
import useAppContext from '../../hooks/useAppContext'

const DATA_ESPECIALIDADES = [
  { value: 1, label: 'Medicina Familiar' },
  { value: 2, label: 'Médicina Interna' },
  { value: 3, label: 'Pediatría' },
  { value: 4, label: 'Gineco obstetricia' },
  { value: 5, label: 'Cirugía' },
  { value: 6, label: 'Psiquiatría' },
  { value: 7, label: 'Cardiología' },
  { value: 8, label: 'Dermatología' },
  { value: 9, label: 'Endocrinología' },
  { value: 1, label: 'Gastroenterología' },
  { value: 1, label: 'Infectología' },
  { value: 1, label: 'Nefrología' },
  { value: 1, label: 'Oftalmología' },
  { value: 1, label: 'Otorrinolaringología' },
  { value: 1, label: 'Neumología' },
  { value: 1, label: 'Neurología' },
  { value: 1, label: 'Radiología' },
  { value: 1, label: 'Anestesiología' },
  { value: 1, label: 'Oncología' },
  { value: 2, label: 'Patología' },
  { value: 2, label: 'Urología' },
  { value: 2, label: 'Medicina física y rehabilitación' },
  { value: 2, label: 'Medicina Intensiva' }
]

const Especialidades = ({ value, onChange }) => {
  return (
    <div className="col-md-8">
      <div className="input-group mb-3">
        <label className="input-group-text"> Especialidad :</label>
        <select
          className="form-select "
          aria-label="Default select example"
          onChange={onChange}
          value={value}
        >
          <option selected>Seleccione su especialidad</option>
          {DATA_ESPECIALIDADES.map((item, index) => {
            return (
              <option key={index.toString()} value={item.value}>
                {item.label}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

const RegistroMedico = (props) => {
  const { registroDoctor } = useAutentication()
  const { setLoading } = useAppContext()
  const onSubmit = async (values, helpers) => {
    try {
      setLoading(true)
      await registroDoctor(values)
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
        password: '',
        especialidadId: ''
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
                  <h1 className="text-center pt-3">Registro Médico</h1>
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
                  <div className="row justify-content-center">
                    <Especialidades
                      onChange={handleChange('especialidadId')}
                      value={values.especialidadId}
                    />
                  </div>
                  <Input
                    label={'Número médico :'}
                    onChange={handleChange('numContacto')}
                    value={values.numContacto}
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

export default RegistroMedico
