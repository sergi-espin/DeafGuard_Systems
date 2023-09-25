document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5000/opiniones")
        .then(response => response.json())
        .then(data => {
            const opinionesYUsuarios = obtenerOpinionesYUsuariosAleatorios(data, 3);

            for (let i = 0; i < opinionesYUsuarios.length; i++) {
                const usuarioID = "nombre_usuario" + (i + 1);
                const opinionID = "resultado" + (i + 1);
                const estrellasID = "estrellas" + (i + 1);
                document.getElementById(usuarioID).innerHTML = opinionesYUsuarios[i].nombre_usuario;
                document.getElementById(opinionID).innerHTML = opinionesYUsuarios[i].opinion;

                const puntuacion = opinionesYUsuarios[i].nota;

                // Selecciona el elemento donde deseas mostrar las estrellas
                const contenedorEstrellas = document.getElementById(estrellasID);

                // Itera desde 1 hasta la puntuación y agrega una estrella en cada iteración
                for (let i = 1; i <= puntuacion; i++) {
                    const estrella = document.createElement("i");
                    estrella.className = "mdi mdi-star text-warning";
                    contenedorEstrellas.appendChild(estrella);
                }
            }
        })
        .catch(error => {
            console.error("Error al obtener datos de la API:", error);
        });
});

function obtenerOpinionesYUsuariosAleatorios(data, cantidad) {
    if (data.length <= cantidad) {
        return data.map(opinion => ({ nombre_usuario: opinion.nombre_usuario, opinion: opinion.opinion }));
    }

    const opinionesYUsuariosAleatorios = [];
    const indicesUtilizados = new Set();

    while (opinionesYUsuariosAleatorios.length < cantidad) {
        const indiceAleatorio = Math.floor(Math.random() * data.length);
        if (!indicesUtilizados.has(indiceAleatorio)) {
            opinionesYUsuariosAleatorios.push({ nombre_usuario: data[indiceAleatorio].nombre_usuario, opinion: data[indiceAleatorio].opinion });
            indicesUtilizados.add(indiceAleatorio);
        }
    }

    return opinionesYUsuariosAleatorios;
}