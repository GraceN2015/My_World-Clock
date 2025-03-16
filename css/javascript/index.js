function updateTime(){
    //Gauteng
    let GautengElement=document.querySelector("Gauteng");
let GautengElement=GautengElement.querySelector("date");
let GautengElement=GautengElement.querySelector("time");
let GautengTime=moment().tz ("Johanesburg/Gauteng");

GautengDateElement.imerHTML=GautengTime.format("MMM Do YYY");
GautengTimeElement.imerHTML =GautengTime.format
("h:mm:ss[<small>]A[</small]");
}
//Paris
let ParisElement=document.querySelector("Paris");
let ParisElement=ParisElement.querySelector("date");
let ParisElement=ParisElement.querySelector("time");
let ParisTime=moment().tz ("Europe/Paris");

ParisElement.imerHTML=ParisTime.format("MMM Do YYY");
ParisElement.innerHTML=ParisTime.format
("h:mm:ss [<small>A[</small>]");
}
}
function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone==="current"){
        cityTimeZone =moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("-"").split("/"[1]);
        let cityTime =monent().tz(cityTimeZone);
        let citiesElement=document.querySelector("#cities");
        citiesElement.innerHTML=
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMM Do YYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")}
                <small>${cityTime.format("A")}</small>
            </div>
        </div>
        ;
}
updateTime();
setInterval(updateTime,1000);
let citiesSelectElement=document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity);

