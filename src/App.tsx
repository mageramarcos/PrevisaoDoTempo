import React, {useRef, useState} from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo'
import Weather5Days from './components/Weather5Days'


const App: React.FC = () => {

  const [weather,setWeather] = useState()
  const [weather5days,setWeather5days] = useState()
  const inputRef = useRef<HTMLInputElement | null>(null)
  
 async function searchCity() {
    const city = inputRef.current?.value
    const key = 'dc47ff06ca4ff272fae2303cc6128d76'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`


    const weatherForecast = await axios.get(url)
    setWeather(weatherForecast.data)
  
    const weatherForecast5Days = await axios.get(url5Days)
    setWeather5days(weatherForecast5Days.data)
  }

  return (
    <>
      <div className='container'>
        <h1>Previsão do Tempo</h1>
        <input 
        type='text'
        placeholder='Digite o nome da cidade...'
        ref={inputRef}
        />
        <button 
        onClick={searchCity}>Buscar</button>
        {weather && <WeatherInfo weather={weather}/>}
        <div>        
        {weather &&<Weather5Days weather5days={weather5days}/>}
        </div>
      </div>
    </>
  )
}

export default App