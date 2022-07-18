import useBaseService from './baseService'

const usePerfilService = () => {
  const baseRespnse = useBaseService()

  const verPerfil = () => {
    const url = `/api/perfil`
    return baseRespnse({
      url,
      method: 'GET'
    })
  }

  const actualizarPerfil = (data) => {
    const url = `/api/perfil`
    return baseRespnse({
      url,
      method: 'PATCH',
      data
    })
  }

  return {
    verPerfil,
    actualizarPerfil
  }
}

export default usePerfilService
