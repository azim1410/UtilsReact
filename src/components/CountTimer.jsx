import React, { useEffect } from 'react'
import { useState } from 'react'
import './CountTimer.scss';

const CountTimer = () => {
    const [time, setTime] = useState(0)
    const [start , setStart] = useState(true)
    console.log(time);

    useEffect(() =>{
        if(start && time > 0){
            setTimeout(() => setTime(time -1) , 1000)
        }
    },[time , start])

    const timeout = () =>{
        setStart(!start);
    }

  return (
    <div className="timer">
        <h2>Timer App</h2>
        <label htmlFor="">Time: </label>
        <input type="number" placeholder='time' onChange={(e) => setTime(e.target.value)}/>
        <div className="clock">
            <h1>{time}</h1>

            <button className='timebtn' onClick={() => timeout()}>Stop</button>
        </div>

    </div>
  )
}

export default CountTimer