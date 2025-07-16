async function GetWeather() {
let API = '50e4787feac79f93eca626159f1ab857';
lat=document.getElementById('lat').value;
lon=document.getElementById('lon').value;
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
let res= await fetch(url)
let data=await res.json()
document.getElementById('cou').textContent=data.sys.country
document.getElementById('temp').textContent=data.main.temp
document.getElementById('wind').textContent=data.wind.speed
document.getElementById('hum').textContent=data.main.humidity
    
}