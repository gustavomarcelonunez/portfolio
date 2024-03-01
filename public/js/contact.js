document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            personalizations: [{
                to: [{ email: 'guscostaf@gmail.com' }]
            }],
            from: { email: formData.get('email') },
            subject: 'Mensaje de contacto',
            content: [{
                type: 'text/plain',
                value: formData.get('message')
            }]
        })
    })
    .then(response => {
        if (response.ok) {
            alert('¡El mensaje ha sido enviado con éxito!');
        } else {
            alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    });
});
