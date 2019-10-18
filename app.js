var params= {
    
    "input":{
        "value":"Bogota"
    }
   
}



async function getweatherNow(city="Bogota"){
    
  try {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff26273dd44b20d6f5a756205c13e775`);
    
    if (data.status !==200) {
        alert("Please add a valid city");  
        render(params);      
            }
    
    data = await data.json();
    let weather = await data;

    
    return weather;
      
  } catch (error) {
      
  }
   
      
}

async function getweatherTomorrow(city="Bogota") {

    try {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ff26273dd44b20d6f5a756205c13e775`);
        data = await data.json();
        let weather = await data;
        return weather;
        
    } catch (error) {
        
    }

   
      
}



async function render(params){
 
    
     loading();


      let data = await getweatherNow(params.input.value);
      let tomorrowWeather= await getweatherTomorrow(params.input.value);
      let icon = data.weather[0].icon;
      let iconTomorrow = tomorrowWeather.list[5].weather[0].icon;
      document.querySelector("#cityName").innerHTML=`${params.input.value}`;

      document.querySelector("#icon").src=`./img/${icon}.svg`;
      document.querySelector("#icon2").src=`./img/${iconTomorrow}.svg`;

      document.querySelector("#main").innerHTML=data.weather[0].main;
      document.querySelector("#descriptionTomorrow").innerHTML=tomorrowWeather.list[5].weather[0].main;

      document.querySelector("#humidity").innerHTML=`Humidity: ${data.main.humidity}%`;
      document.querySelector("#wind").innerHTML=`Wind: ${data.wind.speed} km/h`;
      document.querySelector("#temp").innerHTML=`${Math.round(data.main.temp-273.15)}℃`;
      document.querySelector("#pressure").innerHTML=`Pressure: ${data.main.pressure} hPa`;

      document.querySelector(".loading").style.display="none";
      document.querySelector(".parent").style.display="grid";
     


      document.querySelector(".form").style.display="none";

      document.querySelector("#button").style.display="inline";



          

}   


function loading() {

    document.querySelector(".loading").style.display="block";

    document.querySelector(".parent").style.display="none";
    
}

function showElements() {

    document.querySelector("#button").style.display="none";
    document.querySelector(".form").style.display="inline";

 }




loading();
render(params);