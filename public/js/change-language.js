const translations = {
    es:{
        "greetings": "Saludos! Mi nombre es",
        "intro1": "Soy Desarrollador de Software y vivo en la ciudad de Puerto Madryn, Chubut, Argentina.<br>Actualmente tengo el título de Analista Programador Universitario, y estoy a tan solo un examen de obtener el título de Licenciado en Informática; título otorgado por la Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB). <br> <br>Este espacio es un reflejo de algunos de mis proyectos y experiencias en el fascinante mundo de la informática. Si quieres saber más al respecto, no dudes en contactarme!<br>También puedes ver y descargar mi curriculum <a href=\"./public/cv/CV Nuñez.pdf\" target=\"_blank\">aquí</a>.",
        "tab-button1": "Historia académica",
        "tab-button2": "Publicaciones científicas",
        "tab-button3": "Experiencia laboral",
        "tab1-title1": "Nivel Universitario",
        "analyst": "2018 - 2021: Analista Programador Universitario. UNPSJB, Puerto Madryn.",
        "degree": "2018 - 2024: Licenciatura en Informática. UNPSJB, Puerto Madryn.",
        "tab1-title2": "Cursos",
        "course1": "Introducción del Lenguaje R y Python aplicado a la Ciencia de Datos.",
        "course2": "Aprendizaje profundo por refuerzo.",
        "course3": "Clasificadores probabilísticos en aprendizaje automático.",
        "course4": "Webapps de atrás hacia adelante.",
        "tab1-title3": "Certificaciones",
        "tab3-title1": "Desarrollo de Software",
        "exp1": "<strong>CyberArg Sistemas</strong> (Marzo 2023 - Actual). <strong>PHP - Laravel - Vue - Node - SQL</strong>",
        "exp2": "<strong>Chesca S.A.</strong> (Septiembre 2021 - Enero 2022). <strong>WordPress - Joomla - PHP - SQL</strong>",
        "exp3": "<strong>Laboratorio de Informática - UNPSJB</strong>. (Abril 2021 - Marzo 2023). <strong>Angular - Bootstrap - Java - Node - C - SQL</strong>",
        "exp4": "<strong>Pasantía no rentada - UNPSJB</strong>. (Septiembre 2020 - Octubre 2021). <strong>Angular - Bootstrap - JavaScript - Node - PostgreSQL</strong>",
        "tab3-title2": "Instrucción Académica",
        "aca1": "<strong>Auxiliar en Análisis Matemático - UNPSJB</strong> (Agosto 2021 - Actual).",
        "aca2": "<strong>Tutor Alumno - UNPSJB</strong> (Abril 2019 - Actual).",
        "aca3": "<strong>Profesor de Informática - Fundacion de Altos Estudios en Ciencias Comerciales</strong> (Mayo 2022 - Agosto 2022).",
        "aca4": "<strong>Profesor de Tecnologías Móviles - UNPSJB</strong> (Septiembre 2019 - Diciembre 2019).",
        "aca5": "<strong>Profesor de Computación - UNPSJB</strong> (Septiembre 2019 - Diciembre 2019).",
    },
    en: {
        "greetings": "Greetings! My name is",
        "intro1": "I am a Software Developer living in the city of Puerto Madryn, Chubut, Argentina.<br>Currently, I hold the title of University Programmer Analyst, and I am just one exam away from obtaining the degree of Bachelor in Computer Science; a title conferred by the National University of Patagonia San Juan Bosco (UNPSJB). <br> <br>This space reflects some of my projects and experiences in the fascinating world of computing. If you want to know more about it, feel free to contact me!<br>You can also view and download my resume <a href=\"./public/cv/CV Nuñez.pdf\" target=\"_blank\">here</a>.",
        "tab-button1": "Academic History",
        "tab-button2": "Scientific Publications",
        "tab-button3": "Work Experience",
        "tab1-title1": "University Level",
        "analyst": "2018 - 2021: University Programmer Analyst. UNPSJB, Puerto Madryn.",
        "degree": "2018 - 2024: Bachelor in Computer Science. UNPSJB, Puerto Madryn.",
        "tab1-title2": "Courses",
        "course1": "Introduction to R and Python Language applied to Data Science.",
        "course2": "Deep Reinforcement Learning.",
        "course3": "Probabilistic Classifiers in Machine Learning.",
        "course4": "Back-end Webapps Development.",
        "tab1-title3": "Certifications",
        "tab3-title1": "Software Development",
        "exp1": "<strong>CyberArg Systems</strong> (March 2023 - Present). <strong>PHP - Laravel - Vue - Node - SQL</strong>",
        "exp2": "<strong>Chesca S.A.</strong> (September 2021 - January 2022). <strong>WordPress - Joomla - PHP - SQL</strong>",
        "exp3": "<strong>Computer Laboratory - UNPSJB</strong> (April 2021 - March 2023). <strong>Angular - Bootstrap - Java - Node - C - SQL</strong>",
        "exp4": "<strong>Unpaid Internship - UNPSJB</strong> (September 2020 - October 2021). <strong>Angular - Bootstrap - JavaScript - Node - PostgreSQL</strong>",
        "tab3-title2": "Academic Instruction",
        "aca1": "<strong>Assistant in Mathematical Analysis - UNPSJB</strong> (August 2021 - Present).",
        "aca2": "<strong>Student Tutor - UNPSJB</strong> (April 2019 - Present).",
        "aca3": "<strong>Computer Science Teacher - Foundation for Advanced Studies in Commercial Sciences</strong> (May 2022 - August 2022).",
        "aca4": "<strong>Mobile Technologies Teacher - UNPSJB</strong> (September 2019 - December 2019).",
        "aca5": "<strong>Computer Science Teacher - UNPSJB</strong> (September 2019 - December 2019).",
    },
};

document.addEventListener('DOMContentLoaded', function () {
    const languageButtons = document.querySelectorAll('.lang-btn');

    languageButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});

function changeLanguage(language) {
    updateContent(translations[language]);
}

function updateContent(data) {
    const mainContainer = document.querySelector('.body-container');

    mainContainer.classList.remove('fade-in');
    mainContainer.classList.add('fade-out');

    setTimeout(() => {
        Object.keys(data).forEach(key => {
            const element = document.querySelector(`[data-key="${key}"]`);
            if (element) {
                element.innerHTML = data[key];
            }
        });

        mainContainer.classList.remove('fade-out');
        mainContainer.classList.add('fade-in');
    }, 0.2);
}
