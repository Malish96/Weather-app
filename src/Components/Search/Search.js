import React, {useState} from 'react';
import DailyForecast from "../Dailyforecast/DailyForecast";

import AllDaysForecats from "../Dailyforecast/AllDaysForecats";


const Search = () => {

    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState([]);
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [showComponent, setShowComponent] = useState(false);

    const _onButtonClick=() =>{
        setShowComponent(true)
    }

    const searchFunc = evt => {
        if (evt.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=f80f4a10601675bced77e3155bb02e80`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setLongitude('');
                    setLatitude('');
                    console.log(result);
                });
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,hourly,minutely&appid=f80f4a10601675bced77e3155bb02e80`)
                .then(res => res.json())
                .then(result => {
                    setForecast(result);
                    console.log(result)
                })


        }
    }
    const timeConverter=(UNIX_timestamp)=>{
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
    }

    return (
        <div>
            <main>
                <div className="search-box">

                    <input
                        type="text"
                        className="search-bar m-2 p-2"
                        autoFocus
                        placeholder="Enter Latitude..."
                        onChange={e => setLatitude(e.target.value)}
                        value={latitude}

                    />
                    <input
                        type="text"
                        className="search-bar m-2 p-2"

                        placeholder="Enter Longitude..."
                        onChange={e => setLongitude(e.target.value)}
                        value={longitude}
                        onKeyPress={searchFunc}
                    />

                </div>
                {(typeof weather.main != "undefined") ? (
                    <div >
                    <div className="card m-3">
                        <div className="location-box">
                            <div className="location">{weather.name !== '' ?<p>{weather.name}, {weather.sys.country}</p>: <p>Location undefined</p> }</div>
                            <div className="date"> {timeConverter(weather.dt)}</div>
                            <img className="data" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>

                        </div>
                        <div className="weather-bo.x">
                            <div className="temp">
                                Temperature: {Math.round(weather.main.temp)}°c
                            </div>
                            <div className="feels_like">
                                Feels Like: {Math.round(weather.main.feels_like)}°c
                            </div>
                            <div className="weather">
                                {weather.weather[0].main}</div>
                        </div>
                        </div>
                        <div>
                            <DailyForecast dayData={forecast}/>
                        </div>
                        <div className="final-link" ><button onClick={()=>{_onButtonClick()}} className="btn btn-dark m-3">View more</button>
                            {showComponent ?
                                <AllDaysForecats data={forecast}/>:
                            null
                        }

                        </div>
                    </div>
                ) : ''}
            </main>


        </div>
    );
};

export default Search;
