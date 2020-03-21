import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Day({ api, date, days }) {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const [state, setState] = useState({
        load: false,
        data: []
    })

    useEffect(() => {
        if (!state.load) {
            axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${api}`)
                .then((result) => {
                    setState({
                        ...state,
                        data: result.data.DailyForecasts,
                        load: true
                    })
                })
        }
    })

    return (
        <div className='day'>
            <div className="container-day">
                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h2 className="date-dayname">{days[new Date(state.data.Date).getDay()]}</h2><span className="date-day">{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</span><i className="location-icon" data-feather="map-pin"></i><span className="location">Tel-Aviv, Ils</span></div>
                    <div className="weather-container">
                        {state.load ? <img src={require(`../../media/wether icons/${state.data[0].Day.Icon}.png`)} alt={state.data[0].Day.IconPhrase} /> : null}
                        <h2 className="weather-temp">{state.load ? state.data[0].Temperature.Maximum.Value : null}°F</h2>
                        <h4 className="weather-desc">{state.load ? state.data[0].Day.IconPhrase : null}</h4>
                    </div>
                </div>
                < div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div className="precipitation"> <span className="title">PRECIPITATION</span><span className="value">0 %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">34 %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">WIND</span><span className="value">0 km/h</span>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="week-container">
                        <ul className="week-list">
                            {state.data.map((day, key) => {
                                if (key > 0) {
                                    return <li key={key}>
                                        <img src={require(`../../media/wether icons/${day.Day.Icon}.png`)} alt={day.Day.IconPhrase} />
                                        <span className="day-name">{days[new Date(day.Date).getDay()]}</span>
                                        <span className="day-temp">{day.Temperature.Maximum.Value}°F</span>
                                    </li>
                                }
                                return null;
                            })}
                            <div className="clear"></div>
                        </ul>
                    </div>
                    <div className="location-container"><button className="location-button"> <i data-feather="map-pin"></i><span>Tel-Aviv, Israel</span></button></div>
                </div>
            </div>
        </div >
    )
}


export default Day
