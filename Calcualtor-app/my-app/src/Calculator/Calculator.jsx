import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const [display, setdisplay] = useState('')

    const values = (value)=>{
        setdisplay(display + value)
    }

    const result = () =>{
        try {
            const result = eval(display)
        setdisplay(result)
        } catch (error) {
            setdisplay('Invalid')
        }
        
    }

    const clear = () =>{
        setdisplay('')
    }
  return (
    <div className='calculator'>
    <div className='container'>
    <div className='display'>
    {display}</div>
    <div className='buttons'>

    <div className='row'>
    <div className='col' onClick={()=>values('1')} >1</div>
    <div className='col' onClick={()=>values('4')}>4</div>
    <div className='col' onClick={()=>values('7')}>7</div>
    <div className='col' onClick={()=>values('.')}>.</div>
    </div>

    <div className='row'>
    <div className='col' onClick={()=>values('2')}>2</div>
    <div className='col' onClick={()=>values('5')}>5</div>
    <div className='col' onClick={()=>values('8')}>8</div>
    <div className='col' onClick={()=>values('0')}>0</div>
    </div>

    <div className='row'>
    <div className='col' onClick={()=>values('3')}>3</div>
    <div className='col' onClick={()=>values('6')}>6</div>
    <div className='col' onClick={()=>values('9')}>9</div>
    <div className='col' onClick={()=>values('/')}>/</div>
    </div>

    <div className='row'>
    <div className='col' onClick={()=>values('+')}>+</div>
    <div className='col' onClick={()=>values('-')}>-</div>
    <div className='col' onClick={()=>values('*')}>*</div>
    <div className='col' onClick={result}>=</div>
    </div>
    <div className='row'>
    <div className='col' onClick={clear}>CLR</div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Calculator