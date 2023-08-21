import React,{useState} from 'react'
import Navbar from './navbar'
import Display from './display'
import History from './history'
import Theme from './theme'
import Keypad from './keypad'
import Advanced from './advanced'
import './App.css'
import * as math from 'mathjs'




function App() {
  const [input, setInput] = useState('');


  return (
    <>
    <center>
    <div className="container">
      <Navbar/>
      <Display input={input} />
      <div className=''>
        <History/>
        <Theme/>
      </div>
      <Advanced setInput={setInput} input={input}/>
      <Keypad setInput={setInput} input={input} />

    </div>
    </center>
    
    </>
  )
}

export default App