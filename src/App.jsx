import { useState } from 'react'
import './App.css'
import './index.css'
import { Header } from './components/Header'
import { Counter } from './components/Counter'
import { PersList } from './components/PersList'
import { persons } from "./data.js"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pers, setPers] = useState(persons)

  return (
    <div className='d-flex justify-content-center body' style={{backgroundColor:"purple"}}>
      <div className='main'>
        <Header/>
        <Counter count={pers.length}/>
        {pers.length!=0 && <PersList pers={pers} setPers={setPers}/>}
      </div>
    </div>
  )
}

export default App
