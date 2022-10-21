
const searchSend = document.querySelector('.search-icon')
const search = document.querySelector('#search')
const name = document.querySelector('.name')
const temp = document.querySelector('.temp')
const description = document.querySelector('.description')

const apiData = ('https://api.openweathermap.org/data/2.5/weather?lat=&lon=&appid=c310694a7f501f66fee0ed07b5506dbe')

searchSend.addEventListener('click', function (){

    fetch(apiData)
        .then(res => {
            if (res.ok){
                res.json().then(data => {
// document.getElementById('weather-container').innerHTML = data.hourly_units.temperature_2m;
                    console.log(data)
                })
            }else {
                document.getElementById('erreur').innerHTML = "ERREUR :("
            }
        })
})
let element = document.getElementById('weather-container');
element.innerHTML = `<p></p>`

