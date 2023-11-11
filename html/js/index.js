function calcularTotal() {
    const texto = 'Total a pagar: $ ';
    const valorTicket = 200;

    let cantidad = document.getElementById('cantidad').value;
    console.log('cantidad:' + cantidad);

    let categoria = document.getElementById('categoria').value;
    console.log('categoria:' + categoria);
    let totalSinDescuento = valorTicket * cantidad;
    let totalConDescuento = 0;
    switch (categoria) {
        case 'Estudiante':
            totalConDescuento = totalSinDescuento - (80 * totalSinDescuento)/100;
            console.log('total:' + totalConDescuento);
            break;
        case 'Trainee':
            totalConDescuento = totalSinDescuento - (50 * totalSinDescuento)/100;
            console.log('total:' + totalConDescuento);
            break;
        case 'Junior':
            totalConDescuento = totalSinDescuento - (15 * totalSinDescuento)/100;
            console.log('total:' + totalConDescuento);
            break;
        default:
            console.log('No se ingreso categoria');
    }

    document.getElementById('total').innerHTML = texto + totalConDescuento;

}