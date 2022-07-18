import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: undefined,
  usuario: {
    apellidoMaterno: '',
    apellidoPaterno: '',
    document: '',
    email: '',
    fechaNacimiento: '',
    imagen: '',
    nombre: '',
    numContacto: ''
  }
}

export const counterSlice = createSlice({
  name: 'sesion',
  initialState,
  reducers: {
    agregarSesion: (state, action) => {
      state.accessToken = action.payload.accessToken
      Object.keys(state.usuario).forEach((key) => {
        state.usuario[key] = action.payload.usuario[key] ?? state.usuario[key]
      })
    },
    removerSesion: (state) => {
      Object.entries(initialState).forEach(([key, value]) => {
        state[key] = value
      })
    }
  }
})

export const { removerSesion, agregarSesion } = counterSlice.actions

export default counterSlice.reducer
