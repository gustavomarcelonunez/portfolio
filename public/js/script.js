document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');


    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            

            const contentId = tab.getAttribute('data-content');
            const contentToShow = document.getElementById(contentId);

            tabContents.forEach(content => {
                content.classList.remove('active-content');
            });

            contentToShow.classList.add('active-content');
        });
    });
});

// Obtén todas las pestañas
const tabs = document.querySelectorAll('.tab');

// Asigna un controlador de eventos clic a cada pestaña
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Elimina la clase "active-tab" de todas las pestañas
        tabs.forEach(t => t.classList.remove('active-tab'));

        // Agrega la clase "active-tab" solo a la pestaña clicada
        tab.classList.add('active-tab');

        // ... Resto del código para cambiar el contenido de la pestaña, etc.
    });
});