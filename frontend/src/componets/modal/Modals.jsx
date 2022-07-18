import React, { forwardRef, useImperativeHandle, useState } from 'react'
import Modal from './Modal'

function Modals(props, ref) {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  useImperativeHandle(ref, () => ({ showModal }))

  if (!visible) {
    return null
  }
  return <Modal />
}

export default forwardRef(Modals)
