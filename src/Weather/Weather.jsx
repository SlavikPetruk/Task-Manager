import axios from 'axios'
import { useState } from 'react'
import style from './Weather.module.css'

const Weather = () => {
    const [query, setQuery] = useState('')
    const [cond, setCond] = useState([])
    // const [staticCond, setStaticCond] = useState('')
    // const url = `http://api.weatherstack.com/current?access_key=ea78e96fa11cd9cad2533453df4bab35&query=${query}`
    const url = `http://api.weatherstack.com/current?access_key=ea78e96fa11cd9cad2533453df4bab35&query=${query}`
    // const url2 = `http://api.weatherstack.com/current?access_key=704d5f1b45535d8579a8035956f5179d&query=lviv`


    async function getData() {
        const result = await axios.get(url)
        setCond([result.data])
    }

    // async function getData2() {
    //     const resultLviv = await axios.get(url2)
    //     setStaticCond([resultLviv.data])
    //     console.log(resultLviv.data)
    // }

    const submitForm = e => {
        e.preventDefault()
        getData()
    }

    return (
        <>
        <h1>Weather</h1>
        <form onSubmit={submitForm}>
            <div className={style.inputDiv}>
                <input  
                    type='text' 
                    placeholder='Enter city'
                    className={style.input} 
                    value={query} 
                    onChange={e => setQuery(e.target.value) }/>    
                        <button type='submit'
                                className={style.button}
                        >🔍</button>
            </div>
        </form>
    <div className={style.weather}>
        <div>
            {cond.map((el, index )=> <div 
                                        className={style.data} 
                                        key={index}>
                <div className={style.weather__left}>
                    <p>
                        <img src={el.current.weather_icons} alt=''/>
                    </p>
                    <p>{el.location.name}</p>
                    <p>{el.location.country}</p>
                    <p>{el.current.observation_time}</p>
                </div>

                <div className={style.weather__right}>
                    
                    <p><span>Temperature:  </span><b>{el.current.temperature}°</b></p>
                    <p>
                        <span>Pressure:  </span><b>{el.current.pressure}</b></p>
                    <p><span>Wind Degree:  </span><b>{el.current.wind_degree}</b></p>
                    <p><span>Humidity:  </span><b>{el.current.humidity}</b></p>
                    <p><span>Descriptions:  </span><b>{el.current.weather_descriptions}</b></p>
                    <p><span>Visibility :  </span><b>{el.current.visibility} km</b></p>
                </div>
            </div>
            
            )
            }
        </div>
    </div>
    </>
    )
}

export default Weather
