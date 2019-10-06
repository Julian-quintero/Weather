async function getWeather() {

    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ff26273dd44b20d6f5a756205c13e775");
    data = await data.json();
    let items = await data;


    console.log(items);
    
    
}

getWeather();