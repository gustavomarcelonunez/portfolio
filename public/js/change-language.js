function changeLanguage(language) {
    fetch(`../../portfolio/public/${language}.json`)
    .then(response => response.json())
    .then(data => updateContent(data))
    .catch(error => console.error('Error al cargar el archivo JSON', error));
}

function updateContent(data) {
    Object.keys(data).forEach(key => {
        const element = document.querySelector(`[data-lang="${key}"]`);
        if (element) {
            element.innerHTML = data[key];
        }
    });
}

changeLanguage('es');
