import React from 'react';
import {Link} from "react-router-dom";
import AllDaysForecats from "./AllDaysForecats";

const DailyForecasts = ({dayData}) => {
    const timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();

        var time = date + ' ' + month + ' ' + year;
        return time;
    }
    return (
        <div className="all">
            {dayData.length !== 0 ? (

                <div className="row">

                    <div className="col day-two m-1">
                        <div className="day-two-data">{timeConverter(dayData.daily[1].dt)}</div>
                        <div className="day-one-data"><img className="data-img"
                                                           src={`http://openweathermap.org/img/w/${dayData.daily[1].weather[0].icon}.png`}/>
                        </div>
                        <div className="day-one-data">{dayData.daily[1].temp.day} °c</div>
                        <div className="day-one-data">{dayData.daily[1].weather[0].main}</div>
                    </div>
                    <div className="col day-two m-1">
                        <div className="day-three-data">{timeConverter(dayData.daily[2].dt)}</div>
                        <div className="day-one-data"><img className="data-img"
                                                           src={`http://openweathermap.org/img/w/${dayData.daily[2].weather[0].icon}.png`}/>
                        </div>
                        <div className="day-one-data m-1">{dayData.daily[2].temp.day} °c</div>
                        <div className="day-one-data">{dayData.daily[2].weather[0].main}</div>
                    </div>
                    <div className="col day-one m-1">
                        <div className="day-one-data">{timeConverter(dayData.daily[3].dt)}</div>
                        <div className="day-one-data"><img className="data-img"
                                                           src={`http://openweathermap.org/img/w/${dayData.daily[3].weather[0].icon}.png`}/>
                        </div>
                        <div className="day-one-data m-1">{dayData.daily[3].temp.day} °c</div>
                        <div className="day-one-data">{dayData.daily[3].weather[0].main}</div>
                    </div>
                </div>


            ) : " "}

        </div>
    );
};

export default DailyForecasts;
