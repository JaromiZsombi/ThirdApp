import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Counter } from './components/Counter'
import { PersList } from './components/PersList'

function App() {

  return (
    <div class="container">
      <div className='main'>
        <Header/>
        <Counter/>
        <PersList/>
      </div>
    </div>
  )
}

export default App
