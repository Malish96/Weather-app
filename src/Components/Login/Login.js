import React, {useEffect, useState} from 'react';
import background from '../../images/a1.jpg';
import './Login.css';
import { useNavigate} from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate();

    const onChange=(event)=> {
event.preventDefault();
        if (event?.target?.name === 'email') {
            setEmail(event?.target?.value)
            setIsError(false);
        } else if (event?.target?.name === 'password') {
            setPassword(event?.target?.value)
            setIsError(false);

        }
    }


    const onSubmit = () => {

        if (email !== "admin@admin.com" || password !== "Ad0101") {
            setIsError(true);
        } else {
            navigate('/weatherapp/home');


        }
    }


    return (

        <div className="wrapper-page" style={{background: `url(${background}) center center no-repeat`, backgroundSize:"cover"}}>
        <div className="card card-style">
            <h1 className="title">Login</h1>
            <form >
                <div className="form-group ">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control m-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e)=>onChange(e)}
                        placeholder="Enter email"/>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control m-2"
                        onChange={(e)=>onChange(e)}
                        id="exampleInputPassword1"
                        placeholder="Password"/>

                </div>
                {isError && <div className="alert alert-danger">Email or Password is Incorrect</div> }

                <div className="button-style">
                <button type="submit" className="btn btn-outline-dark m-3 button-type" onClick={onSubmit}>Submit</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Login;
