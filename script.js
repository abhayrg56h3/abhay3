const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiid="399cebf13c51d67d4c5600d78d7884de";
const searchbox=document.querySelector(".search-box input");
const searchbutton=document.querySelector(".search-box button");



async function checkWeather(city){
const response=await fetch(`${apiurl}${city}&appid=${apiid}`);
if(response.status==404){
    document.querySelector(".error").style.visibility="visible";
    document.querySelector(".container").classList.add("none");
    document.querySelector(".weather-box").style.visibility="hidden"
document.querySelector(".weather-details").style.visibility="hidden";
    return ;
}
var data=await response.json();
document.querySelector(".error").style.visibility="hidden";
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".humid").innerHTML=data.main.humidity+"%";
document.querySelector(".hawa").innerHTML=data.wind.speed+"km/h";
document.querySelector(".description").innerHTML=data.weather[0].description;
const image =document.querySelector(".photo");
switch (data.weather[0].main) {
    case 'Clear':
        image.src='images/clear.png';
        break;
        case 'Rain':
            image.src='images/rain.png';
            break;
            case 'Snow':
                image.src='images/snow.png';
                break;
                case 'Clouds':
                    image.src='images/cloud.png';
                    break;
                
                    case 'Mist':
                        image.src='images/mist.png';
                        break;
                        case 'Haze':
                            image.src='images/mist.png';
                            break;

    default:
        image.src='images/cloud.png';
        break;
}

document.querySelector(".weather-box").style.visibility="visible"
document.querySelector(".weather-details").style.visibility="visible";
document.querySelector(".container").classList.remove("none");
return ;
}
searchbutton.addEventListener("click",function(){
    checkWeather(searchbox.value);
})
document.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
    checkWeather(searchbox.value);
    }
})