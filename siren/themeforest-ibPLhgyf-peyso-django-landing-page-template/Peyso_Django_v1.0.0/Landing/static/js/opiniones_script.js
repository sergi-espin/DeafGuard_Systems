document.addEventListener('DOMContentLoaded', function () {
    const contenidoApiElement = document.getElementById('contenido-api');

    // Realizar la solicitud a la API
    fetch('http://localhost:5000/opiniones')
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            if (data.length > 0) {
                const opinion = data[0]; // Acceder a la primera (y única) opinión

                // Mostrar la opinión en el DOM
                contenidoApiElement.innerHTML = `<h2>Opinión:</h2>`;
                contenidoApiElement.innerHTML += `<p>ID: ${opinion.id}</p>`;
                contenidoApiElement.innerHTML += `<p>Usuario ID: ${opinion.usuario_id}</p>`;
                contenidoApiElement.innerHTML += `<p>Nota: ${opinion.nota}</p>`;
                contenidoApiElement.innerHTML += `<p>Opinión: ${opinion.opinion}</p>`;
                contenidoApiElement.innerHTML += `<p>Compra Verificada: ${opinion.compraVerificada === 1 ? 'Sí' : 'No'}</p>`;
            } else {
                contenidoApiElement.innerHTML = `<p>No se encontraron opiniones.</p>`;
            }
        })
        .catch(error => {
            console.error('Error al cargar datos de la API', error);
        });
});
