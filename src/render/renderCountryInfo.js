function renderCountryInfo({ name, capital, population, flags, languages }) { 
   return `
    <h1 class="country-info-title"><img src="${flags.svg}" alt="${name}" width="30"/>${name.common}</h1>
    <ul class="county-info-list">
        <li>
        <span class="country-info-item-title">Capital:</span>
        <span>${capital}</span>
        </li>
        <li>
        <span class="country-info-item-title">Population:</span>
        <span>${population}</span>
        </li>
        <li>
        <span class="country-info-item-title">Languages:</span>
        <span>${Object.values(languages).join(', ')}</span>
        </li>
    </ul>
    `
}
export default renderCountryInfo;