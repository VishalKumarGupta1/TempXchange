import { useState } from 'react'
import './Converter.css'
export default function Converter() {

  const [value, setvalue] = useState()
  const [inputvalue, setinputvalue] = useState(0)
  const [selectedvalue, setselectedvalue] = useState("Celsius to Fahrenheit")

  const handleConvert = () => {
    console.log(inputvalue)
    console.log(selectedvalue)
    if (selectedvalue === 'Celsius to Fahrenheit') {
      let temp = inputvalue * 1.8 + 32;
      temp = temp.toFixed(4);
      setvalue(temp)
    }
    if (selectedvalue === 'Fahrenheit to Celsius') {
      let temp = (inputvalue - 32) * (5 / 9);
      temp = temp.toFixed(4);
      setvalue(temp)
    }

  }

  const handlechange = (e) => {
    setselectedvalue(e.target.value);

  }


  return (
    < >
      <section>
        <h2>Welcome in Temperature Converter</h2>
        <label htmlFor="temp">Choose Here :</label>
        <select value={selectedvalue} onChange={handlechange} name="temp" id="temp">
          <option value="Celsius to Fahrenheit">Celsius to Fahrenheit</option>
          <option value="Fahrenheit to Celsius">Fahrenheit to Celsius</option>
        </select>

        <input type="number" placeholder='Enter Your Temperature' value={inputvalue} id="" onChange={(e) => setinputvalue(e.target.value)} />
        <button onClick={handleConvert} >Convert</button>
        <p> {value} </p>

      </section>

    </>
  )
}
