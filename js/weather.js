const APIKey = 'LrlEtFGSOQzOPUUV2WkCbvVJm9XhdUXp';
const cityUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=belém`;


const getCityData = async () => {

    try {
        const response = await fetch(cityUrl);
        
        if (!response.ok) {
            throw new Error('Não foi possivel obter os dados da API');
        }

        console.log(await response.json()) 

    } catch ({ name, message }) {
        alert(`${name}: ${message}`);
    }
    
}



getCityData()



