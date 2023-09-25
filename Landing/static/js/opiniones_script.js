document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5000/opiniones")
        .then(response => response.json())
        .then(data => {
            const opinionesYUsuarios = obtenerOpinionesYUsuariosAleatorios(data, 4);

            for (let i = 0; i < opinionesYUsuarios.length; i++) {
                const usuarioID = "nombre_usuario" + (i + 1);
                const opinionID = "resultado" + (i + 1);
                const estrellasID = "estrellas" + (i + 1);
                document.getElementById(usuarioID).innerHTML = opinionesYUsuarios[i].nombre_usuario;
                document.getElementById(opinionID).innerHTML = opinionesYUsuarios[i].opinion;

                const puntuacion = opinionesYUsuarios[i].nota;

                const contenedorEstrellas = document.getElementById(estrellasID);

                for (let j = 1; j <= 5; j++) {
                    const estrella = document.createElement("i");
                    estrella.className = j <= puntuacion ? "mdi mdi-star text-warning" : "mdi mdi-star";
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
        return data.map(opinion => ({
            nombre_usuario: opinion.nombre_usuario,
            opinion: opinion.opinion,
            nota: opinion.nota
        }));
    }

    const opinionesYUsuariosAleatorios = [];
    const indicesUtilizados = new Set();

    while (opinionesYUsuariosAleatorios.length < cantidad) {
        const indiceAleatorio = Math.floor(Math.random() * data.length);
        if (!indicesUtilizados.has(indiceAleatorio)) {
            opinionesYUsuariosAleatorios.push({
                nombre_usuario: data[indiceAleatorio].nombre_usuario,
                opinion: data[indiceAleatorio].opinion,
                nota: data[indiceAleatorio].nota
            });
            indicesUtilizados.add(indiceAleatorio);
        }
    }

    return opinionesYUsuariosAleatorios;
}
