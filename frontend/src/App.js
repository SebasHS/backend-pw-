// import './App.scss'
import React from 'react'
import Navigation from './navigation'
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'
import AppContext from './context/AppContext'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContext>
          <Navigation />
        </AppContext>
      </PersistGate>
    </Provider>
  )
}

export default App
