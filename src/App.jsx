import { useState } from 'react'
import {StateProvider} from './StateContext'
import Home from './Components/HomePage'

function App() {

  return (
    <StateProvider>
      <Home />
    </StateProvider>
  )
}

export default App
