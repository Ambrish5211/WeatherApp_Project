const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = '83b12bf3c8ad6eda53f4aa5dad532948'

const city = document.querySelector('.searchBox');
const weatherIcon = document.querySelector('.img-clouds')

 async function showWeather  ()  {
  
     const city = document.querySelector('.searchBox'); 

     let data = await fetch(apiUrl + `&appid=${apiKey}`+ `&q=${city.value}`);
     data = await data.json();
     
     document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `°c`;
     document.querySelector('.city').innerHTML = data.name;
     document.querySelector('.js-humidity').innerHTML = data.main.humidity + `%`;
     document.querySelector('.js-wind').innerHTML = data.wind.speed + `km/hr`; 
      
     if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "./images/clouds.png";
     }
     else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "./images/clear.png";
     }
     else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "./images/rain.png";
     }
     else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "./images/drizzle.png";
     }
     else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "./images/mist.png";
     }
     else if(data.weather[0].main == "Snow"){
      weatherIcon.src = "./images/snow.png";
     }
}


