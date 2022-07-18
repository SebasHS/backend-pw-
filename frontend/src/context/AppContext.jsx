import React, { createContext, useState, useRef } from 'react'
import Loader from '../componets/loader'
import Modal from '../componets/modal/Modals'

export const Context = createContext({
  setLoading: (state, options) => {},
  showModal: () => {}
})

export default function AppContext(props) {
  const [loading, _setLoading] = useState({ visible: false, text: '' })
  const refModal = useRef()

  const setLoading = (state, options) => {
    _setLoading({ visible: state, ...options })
  }
  const showModal = (state, options) => {
    refModal.current.showModal({ visible: state, ...options })
  }
  return (
    <Context.Provider
      value={{
        setLoading,
        showModal
      }}
    >
      {props.children}
      {loading.visible && <Loader {...loading} />}
      <Modal ref={refModal} />
    </Context.Provider>
  )
}
