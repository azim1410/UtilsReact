import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import "./Home.scss"
const Home = () => {
    const nav = useNavigate()
    
  return (
    <div className="home">
        <button className="btn"onClick={() => nav("timer")}>Timer App</button>
        <button className="btn"onClick={() =>nav("quote")}>Quote Generator</button>
        <button className="btn"onClick={() => nav("bmicalc")}>BMI Calculator</button>
        <button className="btn"onClick={() => nav("gituser")}>GitHub User Search</button>
    </div>
  )
}

export default Home