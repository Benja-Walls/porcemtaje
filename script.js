function  calcularPorcentaje() {
    var numero  = parseFloat(document.getElementById('numero').value);
    var porcentaje = parseFloat(document.getElementById('porcentaje').value);

if (isNaN(numero) || isNaN(porcentaje)) {
    document.getElementById('resultado').textContent = 'Por favor, ingrese valores validos.';
    return;
}

    var resultado = (numero * porcentaje) / 100;
    resultado = resultado.toFixed(2); // Redondeamos el resultado a 2 decimales.

    document.getElementById('resultado').textContent = 'EL ' + porcentaje + '% de ' + numero + ' es: ' + resultado;
    document.getElementById('numero').value = ''; // Limpiamos los campos para poder ingresar nuevos valores.
    document.getElementById('porcentaje').value = '';
}
function setPorcentaje(porcentaje) {
    document.getElementById('porcentaje').value = porcentaje;
}