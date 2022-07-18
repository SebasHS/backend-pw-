import useBaseService from './baseService'

const useDoctorService = () => {
  const baseRespnse = useBaseService()

  const verDoctor = ({ docDoctor }) => {
    const url = `/api/doctores/${docDoctor}`
    return baseRespnse({
      url,
      method: 'GET'
    })
  }

  const listadoDoctores = () => {
    const url = `/api/doctores`
    return baseRespnse({
      url,
      method: 'GET'
    })
  }

  return {
    verDoctor,
    listadoDoctores
  }
}

export default useDoctorService
