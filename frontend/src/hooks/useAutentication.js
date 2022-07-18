import { useDispatch } from 'react-redux'
import useAuthService from '../services/auth'
import { agregarSesion, removerSesion } from '../redux/states/sesion'

const useAthentication = () => {
  const service = useAuthService()
  const dispatch = useDispatch()

  const login = async ({ document, password }) => {
    const response = await service.login({ payload: { document, password } })
    dispatch(
      agregarSesion({
        accessToken: response.data.token,
        usuario: response.data.user
      })
    )
  }

  const registroDoctor = async (payload) => {
    const response = await service.registroDoctor({ payload })
    dispatch(
      agregarSesion({
        accessToken: response.data.token,
        usuario: response.data.user
      })
    )
  }

  const registroPaciente = async (payload) => {
    const response = await service.registroPaciete({ payload })
    dispatch(
      agregarSesion({
        accessToken: response.data.token,
        usuario: response.data.user
      })
    )
  }
  const deslogear = async () =>{
    dispatch(
      removerSesion()
    )
  }

  return {
    login,
    registroDoctor,
    registroPaciente,
    deslogear
  }
}

export default useAthentication
