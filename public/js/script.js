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

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active-tab'));
        tab.classList.add('active-tab');
    });
});