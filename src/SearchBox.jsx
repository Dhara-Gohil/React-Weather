import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';
import { red } from '@mui/material/colors';


export default function SearchBox({updateinfo}){
    let [city, setcity] = useState("");
    let [error , seterror] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "3a07559f43c69dbddb9222edb54be1ff"
    

    let GetWeatherInfo = async () =>{

        try{
            let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        let result = {
            city : city,
            temp: jsonResponse.main.temp,
            tempmin: jsonResponse.main.temp_min,
            tempmax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result)
        return result;
        }catch(err){
            throw err;
        }
       
    }

    let handlechange = (evt)=>{
        setcity(evt.target.value)
    }
    let handlesubmit = async (evt) =>{
        try{
            evt.preventDefault();
        console.log(city);
        setcity("");
        let newinfo = await GetWeatherInfo();
        updateinfo(newinfo)
        }catch(err){
            seterror(true);
        }
        
    }
    return(
        <div className='Searchbox'>
            <form action="" onSubmit={handlesubmit}>
            <TextField id="city" 
            label="City Name" 
            variant="outlined" 
            required value={city} 
            onChange={handlechange}/>
            <br /><br />
            <Button variant="contained" type='submit'> Search</Button>
            {error && <p style={{color:"red"}}>No such place in Api!</p>}
            </form>
        </div>
    )
}