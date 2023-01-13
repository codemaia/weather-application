const form = document.querySelector('[data-js="change-location"]');

form.addEventListener('submit', event => {
    event.preventDefault();

    const inputValueCity = event.target.city.value;
    
    console.log(inputValueCity);
    form.reset();

});