const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c66e183fabmsh2f9ff81f955db1fp1eaef3jsnb858edacab56',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

function goo(city) {
    let whole = document.getElementById('whole')
    let lo = document.getElementById('city')

    whole.classList.remove('whole')
    lo.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(Response => Response.json())
        .then((Response) => {
            cloud_pct.innerHTML = Response.cloud_pct
            temp.innerHTML = Response.temp
            feels_like.innerHTML = Response.feels_like
            humidity.innerHTML = Response.humidity
            min_temp.innerHTML = Response.min_temp
            max_temp.innerHTML = Response.max_temp
            wind_speed.innerHTML = Response.wind_speed
            wind_degrees.innerHTML = Response.wind_degrees
            sunrise.innerHTML = Response.sunrise
            sunset.innerHTML = Response.sunset
        })
        .catch(err => console.error(err))
}

function w() {
    let city = document.forms['ok']['okay'].value
    goo(city)
}