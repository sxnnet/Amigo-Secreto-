let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    
    if (nombre !== "") {
        // si el nombre ya está en la lista
        let repetido = false;
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === nombre) {
                repetido = true;
            }
        }
        // aviso si el nombre está repetido en la lista
        if (repetido) {
            alert("Ese nombre ya fue agregado, añade algo más para diferenciarlo. Puede ser un apellido o mejor utiliza un apodo.");
            return;
        }

        amigos.push(nombre);
        document.getElementById("listaAmigos").innerHTML += "<li>" + nombre + "</li>";
        document.getElementById("amigo").value = "";
    } else {
        alert("Escribe un nombre válido");
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos nombres");
        return;
    }

    let posicion = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[posicion];
    document.getElementById("resultado").innerHTML = "<li>Tu amigo secreto es: " + ganador + "</li>";
}
