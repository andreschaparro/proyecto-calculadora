function agregarALaPantalla(caracter) {
    // El texto de un input se carga mediante el atributo value
    // La combinación de operadores += permite concatenar dos strings y guardar el resultado en el primero en una misma línea de código
    document.getElementById('pantalla').value += caracter
}

function borrarLaPantalla() {
    document.getElementById('pantalla').value = ''
}

function calcularElResultado() {
    const operacionAResolver = document.getElementById('pantalla').value
    // El método eval ejecuta una operación matemática a partir de un string 
    const resultado = eval(operacionAResolver)
    document.getElementById('pantalla').value = resultado
}