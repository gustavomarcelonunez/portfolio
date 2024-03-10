document.addEventListener("DOMContentLoaded", function() {

    var modal = document.getElementById("myModal");

    var modalButton = document.getElementById("modal-button");

    window.showModal = function(key) {
        var language = document.documentElement.lang;
        var message = getMessage(key, language);

        document.getElementById("modal-message").innerHTML = message;
        modal.style.display = "block";
    }

    modalButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});