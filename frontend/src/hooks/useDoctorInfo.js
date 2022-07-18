/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useStore } from 'react-redux'
import useDoctorService from '../services/doctor'

const useDoctorInfo = () => {
  const { verDoctor } = useDoctorService()
  const [doctor, serDoctor] = useState()
  const store = useStore()

  const cargarInfoDoctor = async () => {
    const usuario = store.getState().sesion.usuario
    const response = await verDoctor({ docDoctor: usuario.document })
    serDoctor(response.data.data)
  }

  useEffect(() => {
    cargarInfoDoctor()
  }, [])

  return {
    doctor,
    cargarInfoDoctor
  }
}

export default useDoctorInfo
