import React, { useState } from 'react'
import "./QuoteGenerator.scss"
const QuoteGenerator = () => {
    const[text , setText] = useState('');
    const[auth , setAuth] = useState('');


    const fetchQuote= async () =>{
        const res = await fetch('https://api.quotable.io/random')
        const data = await res.json();
        setText(data.content);
        setAuth(data.author);
    }
    const generate = () =>{
        fetchQuote();

    }

  return (
    <div className="quote">
        <div className="box">
            <h1 className='head'>Quote</h1>
            <p className='cont'>{text}</p>
            <p className='authorname'>~{auth}</p>
            <button onClick={generate} className='gen'>Generate Quote</button>

        </div>
    </div>
  )
}

export default QuoteGenerator