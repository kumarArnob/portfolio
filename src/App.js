import logo from './logo.svg';
import './App.css';

import About from './components/About';
import Overview from './components/Overview';
import Project from './components/Project';
import Footer from './components/Footer';

import HideContact from './components/HideContact';
import {useState , useEffect} from 'react';

function App() {
const [name , setName]=useState();
const [temp , setTemp]=useState();
const [logo, setLogo] = useState();

useEffect(() => {
  fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=kolkata&days=3`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key":
          "e01cf4f28dmshbf191d8b2d07cb0p1c4837jsnc8cacd965b30",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      response.json().then((data) => {
        console.log(data);

        if (data.location && data.forecast) {
          setName(data.location.name);
          let tmp = Math.floor(data.forecast.forecastday[0].day.avgtemp_c)
          setTemp(tmp);
                 }
        
        if (data.forecast) {
          setLogo(data.forecast.forecastday[0].day.condition.icon);
         }
      });
    })
    .catch((err) => {
      console.error(err);
    });
  });
  



  return (
    <div className="App">
     {/* <Main/> */}
     <About/>
     <Overview/>
     <Project/>
     <HideContact/>
     {/* <Contact/> */}
     <Footer city={name} temp = {temp} logo={logo}/>

      
    </div>
  );
}

export default App;
