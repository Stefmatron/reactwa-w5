import React, { useState } from "react";
import icons from "./icons/cloudy.gif";
import axios from "axios";
import './App.css';
import './index.css';

function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData ({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            city: response.data.name,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            date: "Wednesday 10:00",
        });
    }

    if (weatherData.ready) {
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
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>Wednesday 17:00</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                        <img
                            src={weatherData.iconUrl} height="70px" width="70px"
                            alt="cloudy icon"
                            className="float-left"
                        />
                        <div className="float-left">
                            <span className="temperature">{Math.round(weatherData.temperature)}</span>
                            <span className="unit">ºC|ºF</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                            <li>Wind: {Math.round(weatherData.wind)}%</li>
                        </ul>
                    </div>
                </div>
            </div>
            );
        } else {
            const apiKey="8fcf11a4c2d8ccd4a4dbb2e0f3ab5ad0";
            let city ="New York";
            let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
            
            return "Loading..." 
        }
    }

export default Weather;