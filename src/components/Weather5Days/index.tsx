import React from "react";
import './style.css'

interface IWeather5Days {
    weather5days?:{
        cnt: number
        list: string[]
    }
}

const Weather5Days: React.FC<IWeather5Days> = ({weather5days}) => {
console.log(weather5days);
console.log(weather5days?.list);


// const dailyForecast =  {}

for (const forecast of weather5days?.list) {
    console.log(forecast);
    
}



    return(
    <>
    <div className="weather5Days-container">
    <p>card2</p>
    </div>
    </>
)
}

export default Weather5Days