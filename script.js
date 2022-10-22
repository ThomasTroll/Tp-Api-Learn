const wrapper = document.querySelector('.wrapper-container'),
inputPart = wrapper.querySelector('.search-input'),
infoTxt = inputPart.querySelector('.search-txt'),
inputField = inputPart.querySelector('input');
myKey = '4a3d98b3184f30861b855fece8afc03f';
locationBtn = inputPart.querySelector('button');

inputField.addEventListener("keyup", e =>{
    if(e.key === "Enter" && inputField.value !== ""){
        requestApi(inputField.value);
    }
});


function requestApi(city){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
    infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pendin");
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
}

function weatherDetails(info){
    console.log(info);
}