function evaluarQuiz() {
    // Aquí defines la lógica para calificar el quiz
    const resultadoDiv = document.getElementById("resultado");
    const respuestaSeleccionada = document.querySelector('input[name="p1"]:checked');

    if (!respuestaSeleccionada) {
        resultadoDiv.innerHTML = "Por favor, selecciona una respuesta.";
        resultadoDiv.style.color = "orange";
        return;
    }

    // Ejemplo de validación (ajusta la respuesta correcta según tu quiz)
    // Si la respuesta correcta es la 'a' para emociones:
    if (respuestaSeleccionada.value === "a") {
        resultadoDiv.innerHTML = "¡Correcto! Las emociones son reacciones inmediatas...";
        resultadoDiv.style.color = "lightgreen";
    } else {
        resultadoDiv.innerHTML = "Incorrecto. Inténtalo de nuevo.";
        resultadoDiv.style.color = "salmon";
    }
}