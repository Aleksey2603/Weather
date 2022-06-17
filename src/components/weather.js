import React from 'react';

const Weather = props => (
    <div>
           {props.city && 
            <div>
                <p>ГОРОД: {props.city} </p>
                <p>ТЕМПЕРАТУРА: {props.temp}</p>
                <p>ВОСХОД: {props.sunrise} </p>
                <p>ЗАХОД: {props.sunset} </p>
            </div>
            }
    </div>
)
export default Weather;   