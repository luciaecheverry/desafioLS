// Recuperar el dato del localStorage
const datoGuardado = localStorage.getItem("dato");

// Verificar si hay un dato guardado y mostrarlo, de lo contrario mostrar un mensaje por defecto
if (datoGuardado) {
    document.getElementById("data").textContent = datoGuardado;
} else {
    document.getElementById("data").textContent = "No hay datos guardados.";
}
