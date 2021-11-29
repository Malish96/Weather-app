import React, {useEffect, useState} from "react";
import "./Home.css";
import background from "../../images/a5.jpg";
import WeatherColombo from "../WeatherColombo/WeatherColombo";
import Search from "../Search/Search";

const Home = () => {

    return (
        <div className="wrapper-home-page" >
            <div className="row">
            <div className="card card-home-one col-4"  style={{ marginTop:"3%"}}>
                <div className="card-header">
                <h5 className="card-title ">Click Refresh to get Colombo weather</h5>
                </div>
                <h6 className="card-subtitle text-muted" style={{ marginTop:"10px", marginBottom:"10px"}}><WeatherColombo/></h6>

            </div>
            <div className=" col col-two" style={{ marginTop:"3%"}}>
                <div >
                    <div className="card-header"><i className="fa fa-search" aria-hidden="true"></i> Search </div>
                    <div className="card-title"> Enter the Coordinates, Press enter on entering longitude</div>
                    <Search/>

                </div>
            </div>
            </div>
        </div>


    );
};

export default Home;
