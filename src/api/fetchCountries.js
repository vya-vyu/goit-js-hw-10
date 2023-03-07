 import { Notify } from 'notiflix/build/notiflix-notify-aio';
function fetchCountries(name) { 
    
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => { 
            if (response.status === 404) { 
                throw new Error();
            }
            return response.json();
        })
        .catch(error => { 
            Notify.failure('Oops, there is no country with that name');

        })
}

export default fetchCountries;