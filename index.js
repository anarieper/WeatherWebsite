const KEY_API = "d1a1f8467082acce3d9ea001e7404587";

const btnSave = document.getElementById("btnSave");
const text = document.getElementById("text-input");
const section = document.getElementById("weather-box");



btnSave.addEventListener("click", function (event){
    event.preventDefault();
    
    const input = text.value;
    const city = input.toLowerCase();
   
    

        async function getForecast(){
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY_API}&units=metric`);

            if (response.status >= 400) {
                alert("Not a valid city name!")
            } else {
                
                const weather = await response.json();
    
            let showName = weather['name'];
            let temp = weather['main']['temp'];
            let showDescription = weather['weather'][0]['description'];
            let showIcon = weather['weather'][0]['icon'];
            let iconUrl = `http://openweathermap.org/img/wn/${showIcon}@2x.png`
            let showTemperature = Math.round(temp);

                const showForecast = 
                `
                <div class="display">
                <img
                  src="${iconUrl}"
                  class="img-fluid rounded-start"
                  alt="..."
                />
                <h2 id="name">${showName}</h2>
                <p id="description">${showDescription}</p>
                <p id="temperature">${showTemperature + "°C"}</p>
                </div>
                `;

                section.innerHTML = showForecast;    
                       
            }
            
        }

        getForecast();    
    

});




