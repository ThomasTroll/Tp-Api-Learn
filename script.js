const searchText = document.querySelector('.search-text');
const submitBtn = document.querySelector('.submit-btn');
const place = document.querySelector(".place");


const sendValue = () => {
    const myKey = '4a3d98b3184f30861b855fece8afc03f';
    const city = searchText.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myKey}`)
        .then((res) => res.json())
        .then((data) => {
            place.innerHTML =`
      <div class="data_results">
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="meteo${data.name}"/>
          <h3>${data.name}</h3>
        <h4> ${data.main.temp} °C</h4>
          <div class="data">
            <div class="temp">
              <div class="data_value">  Min :
                <span class="data_num">${data.main.temp_min} °C</span>
              </div>
              <div class="data_value">Max :
<span class="data_num"> ${data.main.temp_max} °C</span>
              </div>
            </div>
            <div class="weather">
              <div class="data_value">
                 Humidity :
                <span class="data_num">${data.main.humidity} %</span>
              </div>
              <div class="data_value">
                 Wind :
                <span class="data_num">${data.wind.speed} Km/hr</span>
              </div>
            </div>
          </div>
        </div>
      `;
            console.log(data);
        });
};

submitBtn.addEventListener("click", sendValue)


searchText.addEventListener("keyup", function(e){
    if(e.key ==="Enter"){
        sendValue(searchText.value)
    }
})
