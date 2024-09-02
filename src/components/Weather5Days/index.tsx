import React from "react";
import './style.css'

interface IWeather5Days {
    weather5days?: {
        cnt: number
        list: { dt: number, key: string }[]
    }
}

interface IDailyForecast {
    [key: string]: {
        dt: number,
        weather?: {
            icon: string,
            description: string
        }[]
        main?: {
            temp_min: string
            temp_max: string
        }
    }
}

interface IConvertDate {
    dt: number 
}

const Weather5Days: React.FC<IWeather5Days> = ({ weather5days }) => {

    const dailyForecast: IDailyForecast = {}

    for (const forecast of weather5days?.list ?? []) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
        dailyForecast[date] = forecast
    }

    const next5daysForecast = Object.values(dailyForecast).slice(1, 6)

    function convertDate(date : IConvertDate) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })
        return newDate
    }

    return (
        <>
            <div className="weather5Days-container">
                <h3>Previsão Próximos 5 Dias</h3>
                <div className="wather-list">
                    {next5daysForecast.map(forecast => (
                        <div key={forecast.dt} className="weather-item">
                            <p className="forecast-day">{convertDate(forecast)}</p>
                            <img className='weather-image'src={`http://openweathermap.org/img/wn/${forecast.weather?.[0]?.icon}.png`} alt="Previsão dia 1º dia" />
                            <p className="forecast-description">{forecast.weather?.[0]?.description}</p>
                            <p>{Math.round(Number(forecast.main?.temp_min))}Cº min / {Math.round(Number(forecast.main?.temp_max))}Cº max</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Weather5Days