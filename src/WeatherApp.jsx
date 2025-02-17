import SearchBox from "./searchbox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp (){
    const [weatherInfo , setWeatherInfo] = useState({
        city:"Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempmin: 25.05,
        tempmax: 25.05,
        humidity: 47,
        weather: "haze",
    })

    let updateinfo = (newinfo) =>{
        setWeatherInfo(newinfo);

    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateinfo = {updateinfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}