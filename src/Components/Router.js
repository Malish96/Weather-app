import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login/Login';

import Main from "./Main/Main";

import Search from "./Search/Search";
import WeatherColombo from "./WeatherColombo/WeatherColombo";
import AllDaysForecats from "./Dailyforecast/AllDaysForecats";


const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Login/>}/>
                <Route path='/weatherapp/home' element={<Main/>}/>
                <Route path='/colombo' element={<Search/>}/>
                <Route path='/weather' element={<WeatherColombo/>}/>
                <Route path='/alldaysforecast' element={<AllDaysForecats/>}/>

            </Routes>
        </Router>
    );
};

export default Routers;
