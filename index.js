const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = '83b12bf3c8ad6eda53f4aa5dad532948';

const city = document.querySelector('.searchBox');


 async function showWeather  ()  {
   
     const city = document.querySelector('.searchBox'); 

     let data = await fetch(apiUrl + `&appid=${apiKey}`+ `&q=${city.value}`);
     data = await data.json();
     
     document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `°c`;
     document.querySelector('.city').innerHTML = data.name;
     document.querySelector('.js-humidity').innerHTML = data.main.humidity + `%`;
     document.querySelector('.js-wind').innerHTML = data.wind.speed + `km/hr`; 
     var weatherIcon = document.querySelector('.img-clouds');
     weatherIcon.src = "./images/rain.png"

     switch (data.weather[0].main) {
       
      case "Clouds":
         weatherIcon.src = "./images/clouds.png";
          break;
      case "Clear":
          weatherIcon.src = "images/clear.png";
          break;
      case "Thunderstorm":
          weatherIcon.src = "images/rain.png";
          break;
      case "Haze":
          weatherIcon.src="images/drizzle.png";
          break;
      case "Mist":
          weatherIcon.src="images/mist.png";
          break;
      default:
          console.log("No weather icon available.");
  }
 const weather = document.querySelector('.weather');
 weather.classList.remove('weather');
 weather.classList.add('weather2');
}


