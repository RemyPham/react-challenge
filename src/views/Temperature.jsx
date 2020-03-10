import React, {useState} from 'react'
import '../styles/temperature.css'

export default function Temperature() {
    const [temperature, setTemperature] = useState(null)

    const handleInput = (e) => {
        setTemperature(e.target.value)
    }

    return (
        <div>
            <h1>Temperature</h1>
            <input onChange={handleInput} type="number" placeholder="Temperature in °C" autoFocus></input>
            {temperature === null ? "" : temperature < 10 ? <p className="cold">It's cold ❄️</p> : (temperature >= 10 && temperature <= 30) ? <p className="nice">"It's nice 🌼</p> : <p className="warm">It's warm ☀️</p>}
        </div>
    )
}
