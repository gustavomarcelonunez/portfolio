document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('send-button').addEventListener('click', function () {
        // Obtener valores del formulario
        var email = document.querySelector('#contact-form input[name="email"]').value;
        var message = document.querySelector('#contact-form textarea[name="message"]').value;

        // Configurar el servidor SMTP
        var server = {
            host: 'smtp.gmail.com',
            username: 'guscostaf@gmail.com',
            password: 'ggsb yjzb fjzo ontg',
            secure: true
        };

        // Configurar el mensaje de correo electrónico
        var emailMessage = {
            from: email,
            to: 'guscostaf@gmail.com',
            subject: 'Mensaje desde tu sitio web!',
            text: message
        };
        // Enviar el correo electrónico usando SMTP.js
        Email.send(emailMessage, server)
            .then(function () {
                alert('Correo electrónico enviado con éxito!');
            })
            .catch(function (error) {
                console.error('Error al enviar el correo electrónico:', error);
                alert('Hubo un problema al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.');
            });
    });
});