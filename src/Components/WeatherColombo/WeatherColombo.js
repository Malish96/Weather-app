import React, {useState} from 'react';
import DisplayColomboWeather from "./DisplayColomboWeather";

const WeatherColombo = () => {

    let [responseObj, setResponseObj] = useState({});


    function getForecast(e) {
        e.preventDefault();


        setResponseObj({});


        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=7&lon=79&units=metric&APPID=f80f4a10601675bced77e3155bb02e80`
        )
            .then(response => response.json())
            .then(response => {

                setResponseObj(response);
                console.log(response);

            })

    }

    return (
        <div>
            <button className="btn btn-danger" onClick={getForecast}>
                Refresh
            </button>
            {(typeof responseObj.main != "undefined") ? (
                <DisplayColomboWeather
                    data={responseObj}
                />) : ""}
        </div>
    );
};

export default WeatherColombo;
