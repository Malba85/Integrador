
document.addEventListener('DOMContentLoaded', function () {
    // Elementos necesarios del DOM.
    const summaryButton = document.getElementById('summaryButton');
    const totalOutput = document.getElementById('totalOutput');
    const cantidadInput = document.getElementById('inputCantidad');
    const categorySelect = document.getElementById('categorySelect');

    // Valor Entrada y Descuentos por categoria.
    let priceTkt = 200;
    let students = 0.8; // 80% desc
    let trainee = 0.5; // 80% desc
    let junior = 0.15; // 15% desc
  
    // Escuchar con eventlistener el boton "Resumen".
    summaryButton.addEventListener('click', function () {
      //  Obtener los valores de los campos "input"
      const cantidad = parseFloat(cantidadInput.value);
      const category = categorySelect.value;
  
      // Calcular el monto total teniendo en cuenta la "Cantidad" y la "Categoria".
      let totalAmount = priceTkt * cantidad;
      if (category === 'students') {
        totalAmount = totalAmount - ((priceTkt * students) * cantidad);
      } else if (category === 'trainee') {
        totalAmount = totalAmount - ((priceTkt * trainee) * cantidad);
      } else if (category === 'junior') {
        totalAmount = totalAmount - ((priceTkt * junior) * cantidad);
      }
  
      // Actualizar el output con el monto calculado.
      totalOutput.textContent = 'Total a Pagar: $' + totalAmount.toFixed(2);
    });
  });
  