const cityForm = document.querySelector('[data-js="change-location"]');

cityForm.addEventListener('submit', async event => {

    event.preventDefault();

    const inputValueCity = event.target.city.value;
    
    const { Key, LocalizedName } = await getCityData(inputValueCity);
    const { WeatherText, Temperature } = await getCityWeather(LocalizedName);

    

    console.log(WeatherText, Temperature.Metric.Value);
    cityForm.reset();

});