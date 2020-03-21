import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Day from '../Day/day';
import Allweek from '../allWeek/allWeek';
import { api } from '../../config/default.json'

function Home() {

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date();

    const [value, setValue] = useState({
        city: '',
        allweek: [],
        listCities: [],
        key: '',
        load: true,
        modal: false
    })


    useEffect(() => {

        if (value.city && value.load) {
            axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${api}&q=${value.city}`)
                .then((result) => {
                    setValue({ ...value, load: false, listCities: result.data })                          //array
                })

        }
    })

    let onChange = (e) => {

        setValue({ ...value, load: true, city: e.target.value })
    }


    let submit = (e) => {
        e.preventDefault();
        axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${value.key}?apikey=${api}`)
            .then((result) => {
                setValue({
                    ...value,
                    allweek: result.data.DailyForecasts,
                    modal: !value.modal
                })
            })
    }

    const parentCallback = (modal) => {
        setValue({
            ...value,
            modal: !modal
        })
    }


    return (
        <div>< div className='container'>
            <form onSubmit={submit}>
                <div className="autocomplete">
                    <input id="myInput" type="text" name="myCountry" value={value.city} onChange={onChange} placeholder="Country" />
                    <div className='autocomplete-items'>
                        {value.city ? value.listCities.map((city, key) => {
                            return <div key={key} onClick={() => setValue({ ...value, key: city.Key, city: city.LocalizedName, listCities: [] })} > {city.LocalizedName}</div>
                        }) : null}
                    </div>
                </div>
                <input type="submit" />
            </form>
            <Allweek date={date} days={days} props={value.modal} allweek={value.allweek} city={value.city} parentCallback={parentCallback} />
        </div >
            <Day date={date} days={days} api={api} />
        </div>
    )
}


export default Home