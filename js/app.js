const cityForm = document.querySelector('[data-js="change-location"]');
const cityName = document.querySelector('[data-js="city-name"]');
const cityWeather = document.querySelector('[data-js="city-weather"]');
const cityTemperature = document.querySelector('[data-js="city-temperature"]');

cityForm.addEventListener('submit', async event => {

    event.preventDefault();

    const inputValueCity = event.target.city.value;
    
    const { Key, LocalizedName } = await getCityData(inputValueCity);
    const { WeatherText, Temperature } = await getCityWeather(LocalizedName);

    cityName.innerHTML = LocalizedName;
    cityWeather.innerHTML = WeatherText;
    cityTemperature.innerHTML = Temperature.Metric.Value;

    console.log();
    cityForm.reset();

});