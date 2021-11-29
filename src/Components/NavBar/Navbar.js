import React from 'react';
import "./navbar.css"
import { useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-style">
                <a className="navbar-brand" style={{marginLeft:"15px"}} href="#"><i className="fa fa-sun-o fa-lg icon-style"  aria-hidden="true"></i>Weather App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
<div className="btn btn-secondary" style={{marginLeft:"1100px"}} onClick={handleClick}><i className="fa fa-sign-out" aria-hidden="true"></i></div>
            </nav>
        </div>
    );
};

export default Navbar;
