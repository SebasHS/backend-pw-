import axios from 'axios'
import { useStore } from 'react-redux'

const BASE_URL = 'http://localhost:4000'

const useBaseService = () => {
  const { getState } = useStore()

  return ({ method, data, url, withAuthentication = true }) => {
    const accessToken = getState().sesion.accessToken
    return axios({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      method,
      data,
      url
    })
  }
}

export default useBaseService
