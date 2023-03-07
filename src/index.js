import './css/styles.css';
import fetchCountries from './api/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import renderCountryList from './render/renderCountryList';
import renderCountryInfo from './render/renderCountryInfo';

const DEBOUNCE_DELAY = 300;
const searchInput = document.querySelector('#search-box');
const countryListWrapper = document.querySelector('.country-list');
const countryInfoWrapper = document.querySelector('.country-info');

searchInput.addEventListener('input', debounce(search, DEBOUNCE_DELAY));
function search(event) { 
    const name = event.target.value.trim();
    countryListWrapper.innerHTML = '';
    countryInfoWrapper.innerHTML = '';
    if (name === '') return;
    fetchCountries(name).then(ev => {
        if (ev === undefined) { 
            event.target.value = "";
            return;
        }
        if (ev.length > 10) { 
            Notify.info('Too many matches found. Please enter a more specific name');
        }
        if (ev.length >= 2 && ev.length <= 10) { 
           const countryList=ev.map(country => { 
                return renderCountryList(country.name.common,country.flags.svg)
           }).join('')
            countryListWrapper.insertAdjacentHTML('beforeend',countryList);
        }
        if (ev.length === 1) { 
            countryInfoWrapper.insertAdjacentHTML('beforeend',renderCountryInfo(ev[0]))
        }

        })
}




