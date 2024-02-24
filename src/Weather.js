import React from "react";
import icons from "./icons/cloudy.gif";

export default function Weather() {
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
        <div className="row">
            <div className="col-6">
                <img src={icons} height="40px" width="40px" ></img>
                6ºC|ºF
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: 72%</li>
                    <li>Wind: 2%</li>
                </ul>
            </div>
        </div>
    </div>
    )
}