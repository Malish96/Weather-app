import React from 'react';
import './alldayforecast.css'

const AllDaysForecast = ({data}) => {
    const timeConverter=(UNIX_timestamp)=>{
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' '  ;
        return time;
    }
    return (
        <div className="all">
            {data.length !== 0 ? (
                <div className="row ">
                    <div className="col day-one m-1">
                        <div className="day-one-data">{timeConverter(data.daily[4].dt)}</div>
                        <div className="day-one-data"><img className="data-img"
                                                           src={`http://openweathermap.org/img/w/${data.daily[4].weather[0].icon}.png`}/>
                        </div>
                        <div className="day-one-data">{data.daily[4].temp.day} °c</div>
                        <div className="day-one-data">{data.daily[4].weather[0].main}</div>
                    </div>
                    <div className="col day-two m-1">
                        <div className="day-two-data">{timeConverter(data.daily[5].dt)}</div>
                        <div className="day-one-data"><img className="data-img"
                                                           src={`http://openweathermap.org/img/w/${data.daily[5].weather[0].icon}.png`}/>
                        </div>
                        <div className="day-one-data">{data.daily[5].temp.day} °c</div>
                        <div className="day-one-data">{data.daily[5].weather[0].main}</div>
                    </div>
                    <div className="col day-one m-1">
                        <div className="day-three-data">{timeConverter(data.daily[6].dt)}</div>
                        <div className="day-one-data"><img className="data-img"
                                                           src={`http://openweathermap.org/img/w/${data.daily[6].weather[0].icon}.png`}/>
                        </div>
                        <div className="day-one-data">{data.daily[6].temp.day} °c</div>
                        <div className="day-one-data">{data.daily[6].weather[0].main}</div>
                    </div>
                    <div className="col day-one m-1">
                        <div className="day-four-data">{timeConverter(data.daily[7].dt)}</div>
                        <div className="day-one-data"><img className="data-img"
                                                           src={`http://openweathermap.org/img/w/${data.daily[7].weather[0].icon}.png`}/>
                        </div>
                        <div className="day-one-data">{data.daily[7].temp.day} °c</div>
                        <div className="day-one-data">{data.daily[7].weather[0].main}</div>
                    </div>

                </div>
            ) : ""}
        </div>
    );
};

export default AllDaysForecast;
