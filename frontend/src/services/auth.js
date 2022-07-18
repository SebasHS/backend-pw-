const { default: useBaseService } = require('./baseService')

const useAuthService = () => {
  const baseService = useBaseService()

  const login = ({ payload }) => {
    const url = 'api/auth/login'
    return baseService({
      url,
      method: 'POST',
      data: {
        document: payload.document,
        password: payload.password
      }
    })
  }

  const registroPaciete = ({ payload }) => {
    const url = 'api/auth/registro-paciente'
    return baseService({
      url,
      method: 'POST',
      data: {
        document: payload.document,
        nombre: payload.nombre,
        apellidoPaterno: payload.apellidoPaterno,
        apellidoMaterno: payload.apellidoMaterno,
        numContacto: payload.numContacto,
        imagen: payload.imagen,
        email: payload.email,
        password: payload.password
      }
    })
  }

  const registroDoctor = ({ payload }) => {
    const url = 'api/auth/registro-doctor'
    return baseService({
      url,
      method: 'POST',
      data: {
        document: payload.document,
        nombre: payload.nombre,
        apellidoPaterno: payload.apellidoPaterno,
        apellidoMaterno: payload.apellidoMaterno,
        numContacto: payload.numContacto,
        imagen: payload.imagen,
        email: payload.email,
        password: payload.password,
        especialidadId: payload.especialidadId
      }
    })
  }

  const deslogear = () => {}

  return {
    login,
    registroPaciete,
    registroDoctor,
    deslogear
  }
}

export default useAuthService
