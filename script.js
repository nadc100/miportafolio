document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    // Obtener los datos del formulario
    var formData = new FormData(this);

    // Enviar los datos mediante una petición POST
    fetch('URL_DEL_SERVIDOR', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Mensaje enviado correctamente');
            // Aquí puedes añadir cualquier otra lógica que desees después de enviar el formulario
        } else {
            alert('Hubo un problema al enviar el mensaje');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el mensaje');
    });
});