const apikey = "45ab5df9e24578b335b205d10cc7e2d1";

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const search nire

const searchBox = document.querySelector(".search input");

// const searchBtn = document.querySelector(".card .search button");

const searchBtn = document.querySelector(".search button");

// const searchBtn = document.querySelector(".search button");

// const weather_icon = document.querySelector("weather-icon");



async function checkWeather(city){

    const response = await fetch(apiurl + city +`&appid=${apikey}`);

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}


searchBtn.addEventListner("click",()=>{
    checkWeather(searchBox.value); 
});
