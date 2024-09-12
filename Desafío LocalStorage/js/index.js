document.getElementById("buttonText").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    // Guardamos el valor en el localStorage bajo la clave "dato"
    localStorage.setItem("dato", inputText);
});