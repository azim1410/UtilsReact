import React, { useState } from 'react'
import './BMI.scss'
const BMI = () => {
  const[height , setHeight] = useState('')
  const[weight, setWeight] = useState('')
  const [age, steAge] = useState('');
  const[bmi , setBmi] = useState(null)
  const [fat, setFat] = useState(null)
  const calc =() => {
    if(weight && height){
      const wt =parseFloat(weight);
      const ht = parseFloat(height);

      const htm = ht /100;
      const ans = wt / (htm * htm);
      setBmi(ans.toFixed(2))

    }
    else{
      setBmi(null)
    }

  }

  const fatper =() =>{
    if(bmi){
      const ans = (1.20 * bmi )+  (0.23*age) - 16.2;
      setFat(ans.toFixed(2))
    }
  }

  return (
    <div className="bmi">
     <h1>BMI</h1>
     <h2>Height</h2>
     <input type="number" name='height' placeholder='height' onChange={(e) => setHeight(e.target.value)}/>
     <h2>weight</h2>
     <input type="number" name="weight" id="" placeholder='weight' onChange={(e) => setWeight(e.target.value)}/>
     <h2>Age</h2>
     <input type="number" name="age" id="" placeholder='Age' onChange={(e) => steAge(e.target.value)}/>
    <button className="btn"onClick={calc}>Get BMI</button>
    {bmi && <h1>{bmi}</h1>}
    {bmi && <button className="btn" onClick={fatper}>Get Fat %</button>}
    {fat && <h1>{fat}</h1>}
    </div>
  )
}

export default BMI