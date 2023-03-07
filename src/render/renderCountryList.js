function renderCountryList(name, icon) { 
    return `<li class="list-item"><img src="${icon}" alt="${name}" width="30"/>${name}</li>`
}
export default renderCountryList;