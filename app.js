


async function getweatherNow() {

    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ff26273dd44b20d6f5a756205c13e775");
    data = await data.json();
    let weather = await data;
    return weather;
      
}

async function getweatherTomorrow() {

    let data = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=london&appid=ff26273dd44b20d6f5a756205c13e775");
    data = await data.json();
    let weather = await data;
    return weather;
      
}



async function render(){
    
     

      let data = await getweatherNow();
      let tomorrowWeather= await getweatherTomorrow();
      let icon = data.weather[0].icon;
      let iconTomorrow = tomorrowWeather.list[5].weather[0].icon;
      console.log(tomorrowWeather);
      
     
      
  


      document.querySelector("#icon").src=`http://openweathermap.org/img/wn/${icon}@2x.png`;
      document.querySelector("#icon2").src=`http://openweathermap.org/img/wn/${iconTomorrow}@2x.png`;

      document.querySelector("#main").innerHTML=data.weather[0].main;
      document.querySelector("#descriptionTomorrow").innerHTML=tomorrowWeather.list[5].weather[0].main;

      document.querySelector("#humidity").innerHTML=`Humidity: ${data.main.humidity}%`;
      document.querySelector("#wind").innerHTML=`Wind: ${data.wind.speed} km/h`;
      document.querySelector("#temp").innerHTML=`${Math.round(data.main.temp-273.15)}℃`;
      document.querySelector("#tomorrow").innerHTML=`Humidity: ${tomorrowWeather.list[4].main.temp}%`;

      document.querySelector(".loading").style.display="none";

      document.querySelector(".parent").style.display="grid";
     



      


          

}   


function loading() {

    document.querySelector(".parent").style.display="none";
    
}


loading();
render();