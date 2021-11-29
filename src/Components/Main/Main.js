import React from 'react';
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";

const Main = () => {
    return (
        <div>
            <Navbar style={{zIndex:"1"}}/>
            <Home style={{zIndex:"0"}}/>
        </div>
    );
};

export default Main;
