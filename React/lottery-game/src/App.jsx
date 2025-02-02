import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Lottery from './Lottery'


function App() {


  return (
    <>
    <Lottery n={5} winningSum = {25}/>
    
    </>
  )
}

export default App
