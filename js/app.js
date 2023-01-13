const cityForm = document.querySelector('[data-js="change-location"]');
const cityName = document.querySelector('[data-js="city-name"]');
const cityWeather = document.querySelector('[data-js="city-weather"]');
const cityTemperature = document.querySelector('[data-js="city-temperature"]');
const cityTime = document.querySelector('[data-js="time"]');

cityForm.addEventListener('submit', async event => {

    event.preventDefault();

    const inputValueCity = event.target.city.value;
    const { Key, LocalizedName } = await getCityData(inputValueCity);
    const { WeatherText, Temperature, IsDayTime } = await getCityWeather(LocalizedName);

    if (IsDayTime) {
        cityTime.setAttribute('src', './src/day.svg');
    } else {
        cityTime.setAttribute('src', './src/night.svg');
    }


    cityName.innerHTML = LocalizedName;
    cityWeather.innerHTML = WeatherText;
    cityTemperature.innerHTML = Temperature.Metric.Value;

    console.log();
    cityForm.reset();

});