import React from "react"
import './style.css'

interface IWeatherInfo {
    weather: {
        base?: string
        name?: string
        main?: {
            temp?: number
            feels_like?: number
            humidity?: number
            pressure?: number
        }
        weather?: [{
            icon: string
            description: string
        }]
    }
}

const WeatherInfo: React.FC<IWeatherInfo> = ({ weather }) => {

    return (
        <>
            <div className="weatherInfo-container">
                <h2>{weather.name}</h2>
                <div className="weather-info">
                    <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`} alt="icon previsão" />
                    <p className="temperature">{Math.round(Number(weather.main?.temp))}ºC</p>
                </div>
                <div className="description">{weather.weather?.[0].description}</div>
                <div className="details">
                    <p>Umidade: {Math.round(Number(weather.main?.humidity))}%</p>
                    <p>Sensação térmica: {Math.floor(Number(weather.main?.feels_like))}ºC</p>
                    <p>Pressão: {Math.round(Number(weather.main?.pressure))} hPa</p>
                </div>
            </div>
        </>
    )
}

export default WeatherInfo