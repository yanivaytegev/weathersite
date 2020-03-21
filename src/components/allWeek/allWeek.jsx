import React from 'react';

function AllWeek({ props, allweek, city, parentCallback, date }) {

    const days = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SUT']

    return (
        <div className='modal-container'>
            <div id="myModal" className="modal" style={props ? { display: 'block' } : null}>
                <div className='weather-all-week'>
                    <div className='all-weelk'>
                        <div className="card-weather">
                            <span className="close" onClick={() => parentCallback(props)}>&times;</span>
                            <div className="card__top">
                                <div className="card__intro">
                                    <h1 className="card__title">{city}</h1>
                                    <div className="card__meta">
                                        <p>{city}</p>
                                        <div>{date.getHours()}:{date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card__bottom">
                                <div className="panel weather-panel">
                                    {allweek.map((day, key) => {
                                        if (key === 0) {
                                            return <div key={key} className="weather-panel__cell weather-panel__cell--main">
                                                <div className="temp_date">
                                                    <h2>{day.Temperature.Maximum.Value}<span>&deg;</span></h2>
                                                    <div>{days[new Date(day.Date).getDay()]}</div>
                                                </div>
                                                <div className="icon_details">
                                                    <div className="icon">
                                                        <img src={require(`../../media/wether icons/${day.Day.Icon}.png`)} alt={day.Day.IconPhrase} />
                                                    </div>
                                                    <p>{day.Day.IconPhrase}</p>
                                                </div>
                                            </div>
                                        }
                                        return <div key={key} className="weather-panel__cell">
                                            <div>{days[new Date(day.Date).getDay()]}</div>
                                            <img src={require(`../../media/wether icons/${day.Day.Icon}.png`)} alt={day.Day.IconPhrase} />
                                            <p>{day.Temperature.Maximum.Value}&deg;</p>

                                            <p>{day.Day.IconPhrase}</p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default AllWeek
