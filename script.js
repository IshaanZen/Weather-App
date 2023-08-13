
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".weather").style.display = "none"
        document.querySelector(".error").style.display = "block"
    }
    else {
        var data = await response.json();
    // console.log(data);
    const icon = data.weather[0].icon; 
    document.querySelector(".city").innerHTML = "Weather in " + data.name;
    document.querySelector(".temp").innerHTML =  " Temperatue is : " + Math.round(data.main.temp) + "°C";
    document.querySelector(".Humidity").innerHTML =  "Humidity : " + data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML =  "Wind Speed : " + data.wind.speed + " km/h";
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"  ;
    document.querySelector(".description").innerHTML =  data.weather[0].description ;
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"

    }

    
 
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})

