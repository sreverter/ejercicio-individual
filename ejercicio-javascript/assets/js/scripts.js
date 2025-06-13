    const calcularBtn = document.getElementById('calcularBtn');
    const modal = document.getElementById('resultadoModal');
    const cerrarModal = document.getElementById('cerrarModal');
    const resultadoTexto = document.getElementById('resultadoTexto');

    calcularBtn.addEventListener('click', () => {
      const nombre = document.getElementById('nombre').value;
      const fecha = new Date(document.getElementById('fecha').value);
      const hoy = new Date();

      if (!nombre || isNaN(fecha.getTime())) {
        alert("Por favor completá tu nombre y fecha correctamente.");
        return;
      }

      const diferencia = hoy - fecha;
    const diasVividos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    resultadoTexto.textContent = `${nombre}, has vivido aproximadamente ${diasVividos.toLocaleString()} días.`;
      modal.style.display = 'block';
    });

    cerrarModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });