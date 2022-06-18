import React from 'react';
import Info from './components/info';
import Button from './components/button';
import Buttonekb from './components/button 2';
import Weather from './components/weather';

const API_KEY = 'bd7235618e6918c008eb50421ff915fb';



class App extends React.Component {
  state = {
    city: undefined,
    temp: undefined,
    sunrise: undefined,
    sunset: undefined,
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const ekb = 'Ekaterinburg'
    const che = 'Chelyabinsk'
    const api_url = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=Chelyabinsk&appid=${API_KEY}`);
    const data = await api_url.json();

    let temp = data.main.temp;
    let tempFToCel = Math.floor(temp - 273.15);

    function timeConverter(UNIX_timestamp){
      let a = new Date(UNIX_timestamp * 1000);
      let hour = a.getHours();
      let min = "0" + a.getMinutes();
      let sec = "0" + a.getSeconds();
      let time = hour + ':' + min.substr(-2);
      return time;
    }
    let sunset = data.sys.sunset,
        sunrise = data.sys.sunrise;
    let sunset_date = timeConverter(sunset);
    let sunrise_date = timeConverter(sunrise); 

    this.setState ({
      city: data.name,
      temp: tempFToCel,
      sunrise: sunrise_date,
      sunset: sunset_date,
    });
  }

  gettingWeatherEkb = async (e) => {
    e.preventDefault();
    const ekb = 'Ekaterinburg'
    const che = 'Chelyabinsk'
    const api_url = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=Ekaterinburg&appid=${API_KEY}`);
    const data = await api_url.json();

    let temp = data.main.temp;
    let tempFToCel = Math.floor(temp - 273.15);

    function timeConverter(UNIX_timestamp){
      let a = new Date(UNIX_timestamp * 1000);
      let hour = a.getHours();
      let min = "0" + a.getMinutes();
      let sec = "0" + a.getSeconds();
      let time = hour + ':' + min.substr(-2);
      return time;
    }
    let sunset = data.sys.sunset,
        sunrise = data.sys.sunrise;
    let sunset_date = timeConverter(sunset);
    let sunrise_date = timeConverter(sunrise); 

    this.setState ({
      city: data.name,
      temp: tempFToCel,
      sunrise: sunrise_date,
      sunset: sunset_date,
    });
  }

  render () {
    return (
      <div>
        <Info />
        <Button weatherfunc = {this.gettingWeather}/>
        <Buttonekb weatherfuncekb = {this.gettingWeatherEkb}/>
        <Weather 
        city = {this.state.city}
        temp = {this.state.temp}
        sunrise = {this.state.sunrise}
        sunset = {this.state.sunset}
        />
      </div>
    );
  }
}
export default App;