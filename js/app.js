const cityForm = document.querySelector('[data-js="change-location"]');
const cityName = document.querySelector('[data-js="city-name"]');
const cityWeather = document.querySelector('[data-js="city-weather"]');
const cityTemperature = document.querySelector('[data-js="city-temperature"]');
const cityCard = document.querySelector('[data-js="city-card"]');
let cityTime = document.querySelector('[data-js="time"]');
const cityTimeIcon = document.querySelector('[data-js="time-icon"]');

cityForm.addEventListener('submit', async event => {

    event.preventDefault();

    const inputValueCity = event.target.city.value;
    const { LocalizedName } = await getCityData(inputValueCity);
    const { WeatherText, WeatherIcon, Temperature, IsDayTime } = await getCityWeather(LocalizedName);

    if (cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none');
    }


    if (IsDayTime) {
        cityTime.src = './src/day.svg';
    } else {
        cityTime.src = './src/night.svg';
    }

    timeIcon = `<img src="./src/icons/${WeatherIcon}.svg">`;
    
    cityTimeIcon.innerHTML = timeIcon;
    cityName.textContent = LocalizedName;
    cityWeather.textContent = WeatherText;
    cityTemperature.textContent = Temperature.Metric.Value;

    console.log();
    cityForm.reset();

});