const APIKey = 'LrlEtFGSOQzOPUUV2WkCbvVJm9XhdUXp';
const getCityUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;


const getCityData = async cityName => {
    try {
        const cityUrl = getCityUrl(cityName);
        const response = await fetch(cityUrl);
        
        if (!response.ok) {
            throw new Error('Não foi possivel obter os dados da API');
        }

        const [cityData] = await response.json();
        return cityData;

    } catch ({ name, message }) {
        alert(`${name}: ${message}`);
    }

}

console.log(getCityData('Belém'));


const getWeatherData = async cityName => {
    try {
        
        const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${}`;
        const response = await fetch(cityUrl);
        
        if (!response.ok) {
            throw new Error('Não foi possivel obter os dados da API');
        }

        const [cityData] = await response.json();
        return cityData;

    } catch ({ name, message }) {
        alert(`${name}: ${message}`);
    }
    
}






