const translations = {
    es:{
        "greetings": "Saludos! Mi nombre es",
        "intro1": "Soy Licenciado en Informática y vivo en la ciudad de Puerto Madryn, Chubut, Argentina.<br> Actualmente estoy realizando un doctorado en Ciencias de la Computación en la Universidad Nacional del Sur (UNS), Bahía Blanca.<br> <br>Este espacio es un reflejo de algunos de mis proyectos, experiencias y publicaciones científicas en el ámbito de la informática. Si quieres saber más al respecto, no dudes en contactarme!<br> También puedes ver y descargar mi curriculum <a href=\"./public/cv/CV Nuñez.pdf\" target=\"_blank\">aquí</a>.",
        "tab-button1": "Historia académica",
        "tab-button2": "Publicaciones científicas",
        "tab-button3": "Experiencia laboral",
        "tab-button4": "Contacto",
        "tab1-title1": "Nivel Universitario",
        "analyst": "2018 - 2021: Analista Programador Universitario. UNPSJB, Puerto Madryn.",
        "degree": "2018 - 2024: Licenciatura en Informática. UNPSJB, Puerto Madryn.",
        "tab1-title2": "Cursos",
        "course4": "Introducción del Lenguaje R y Python aplicado a la Ciencia de Datos.",
        "course3": "Aprendizaje profundo por refuerzo.",
        "course2": "Clasificadores probabilísticos en aprendizaje automático.",
        "course1": "Webapps de atrás hacia adelante.",
        "tab1-title3": "Certificaciones",
        "tab2-title1": "Artículos en Revistas",
        "tab3-title1": "Desarrollo de Software",
        "exp1": "<strong>CyberArg Sistemas</strong> (Marzo 2023 - Julio 2024). <strong>PHP - Laravel - Vue - Node - SQL</strong>",
        "exp2": "<strong>Chesca S.A.</strong> (Septiembre 2021 - Enero 2022). <strong>WordPress - Joomla - PHP - SQL</strong>",
        "exp3": "<strong>Laboratorio de Informática - UNPSJB</strong>. (Abril 2021 - Marzo 2023). <strong>Angular - Bootstrap - Java - Node - C - SQL</strong>",
        "exp4": "<strong>Pasantía no rentada - UNPSJB</strong>. (Septiembre 2020 - Octubre 2021). <strong>Angular - Bootstrap - JavaScript - Node - PostgreSQL</strong>",
        "tab3-title2": "Instrucción Académica",
        "aca1": "<strong>Auxiliar en Análisis Matemático - UNPSJB</strong> (Agosto 2021 - Julio 2024).",
        "aca2": "<strong>Tutor Alumno - UNPSJB</strong> (Abril 2019 - Marzo 2024).",
        "aca3": "<strong>Profesor de Informática - Fundacion de Altos Estudios en Ciencias Comerciales</strong> (Mayo 2022 - Agosto 2022).",
        "aca4": "<strong>Profesor de Tecnologías Móviles - UNPSJB</strong> (Septiembre 2019 - Diciembre 2019).",
        "aca5": "<strong>Profesor de Computación - UNPSJB</strong> (Septiembre 2019 - Diciembre 2019).",
        "tab4-title1": "Contacto",
        "message-title": "Mensaje: <textarea name=\"message\"></textarea>",
        "send-button": "Enviar",
        "modal-message-invalid-email": "Por favor, ingrese una dirección de correo electrónico válida.",
        "modal-message-empty-message": "Por favor, ingrese un mensaje.",
        "modal-message-success": "Mensaje enviado correctamente.",             
    },
    en: {
        "greetings": "Greetings! My name is",
        "intro1": "I hold a Bachelor's degree in Computer Science and live in Puerto Madryn, Chubut, Argentina.<br> I am currently pursuing a Ph.D. in Computer Science at the National University of the South (UNS), Bahía Blanca.<br> <br>This space showcases some of my projects, experiences, and scientific publications in the field of computer science. If you'd like to learn more, feel free to contact me!<br>You can also view and download my resume <a href=\"./public/cv/CV Nuñez.pdf\" target=\"_blank\">here</a>.",
        "tab-button1": "Academic History",
        "tab-button2": "Scientific Publications",
        "tab-button3": "Work Experience",
        "tab-button4": "Contact",
        "tab1-title1": "University Level",
        "analyst": "2018 - 2021: University Programmer Analyst. UNPSJB, Puerto Madryn.",
        "degree": "2018 - 2024: Bachelor in Computer Science. UNPSJB, Puerto Madryn.",
        "tab1-title2": "Courses",
        "course4": "Introduction to R and Python Language applied to Data Science.",
        "course3": "Deep Reinforcement Learning.",
        "course2": "Probabilistic Classifiers in Machine Learning.",
        "course1": "Webapps Development - From back to front.",
        "tab1-title3": "Certifications",
        "tab2-title1": "Journal Articles",
        "tab3-title1": "Software Development",
        "exp1": "<strong>CyberArg Systems</strong> (March 2023 - July 2024). <strong>PHP - Laravel - Vue - Node - SQL</strong>",
        "exp2": "<strong>Chesca S.A.</strong> (September 2021 - January 2022). <strong>WordPress - Joomla - PHP - SQL</strong>",
        "exp3": "<strong>Computer Laboratory - UNPSJB</strong> (April 2021 - March 2023). <strong>Angular - Bootstrap - Java - Node - C - SQL</strong>",
        "exp4": "<strong>Unpaid Internship - UNPSJB</strong> (September 2020 - October 2021). <strong>Angular - Bootstrap - JavaScript - Node - PostgreSQL</strong>",
        "tab3-title2": "Academic Instruction",
        "aca1": "<strong>Assistant in Mathematical Analysis - UNPSJB</strong> (August 2021 - July 2024).",
        "aca2": "<strong>Student Tutor - UNPSJB</strong> (April 2019 - March 2024).",
        "aca3": "<strong>Computer Science Teacher - Foundation for Advanced Studies in Commercial Sciences</strong> (May 2022 - August 2022).",
        "aca4": "<strong>Mobile Technologies Teacher - UNPSJB</strong> (September 2019 - December 2019).",
        "aca5": "<strong>Computer Science Teacher - UNPSJB</strong> (September 2019 - December 2019).",
        "tab4-title1": "Contact",
        "message-title": "Message: <textarea name=\"message\"></textarea>",
        "send-button": "Send",
        "modal-message-invalid-email": "Please enter a valid email address.",
        "modal-message-empty-message": "Please enter a message.",
        "modal-message-success": "Message sent successfully.",
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
    document.documentElement.lang = language;
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

function getMessage(key, language) {
    return translations[language][key];
}

