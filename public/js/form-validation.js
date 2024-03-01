document.getElementById("send-button").addEventListener("click", function(event) {
    // Detener el envío del formulario para realizar la validación primero
    event.preventDefault();

    // Obtener los valores de los campos
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;

    // Validar el campo de correo electrónico
    if (!validateEmail(email)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return;
    }

    // Validar el campo de mensaje
    if (message.trim() === "") {
        alert("Por favor, ingrese un mensaje.");
        return;
    }

    // Si pasa la validación, enviar el formulario
    this.form.submit();
});

// Función para validar el formato de correo electrónico
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
