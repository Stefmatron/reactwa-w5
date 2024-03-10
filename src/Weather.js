import React from "react";
import icons from "./icons/cloudy.gif";
import axios from "axios";
import './App.css';
import './index.css';

function Weather() {
    function handleResponse(response) {
        console.log(response.data);
    }
    const apiKey="e7adc2474a6f594a66a403f63b2a2475";
    let city ="New York";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
    <div className="Weather">
        <form>
        <div className="row">
        <div className="col-5">
            <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
            />
        </div>
        <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </div>
        </form>
        <h1>New York</h1>
        <ul>
            <li>Wednesday 17:00</li>
            <li>Mostly Cloudy</li>
        </ul>
        
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img
                    src={icons} height="70px" width="70px"
                    alt="cloudy icon"
                    className="float-left"
                />
                <div className="float-left">
                    <span className="temperature">6</span>
                    <span className="unit">ºC|ºF</span>
                </div>
              </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: 72%</li>
                    <li>Wind: 2%</li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Weather;