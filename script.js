document.addEventListener('DOMContentLoaded', function () {
    const mostrarFraseBtn = document.getElementById('mostrarFraseBtn');
    const fraseContainer = document.getElementById('fraseContainer');

    mostrarFraseBtn.addEventListener('click', function () {
        fraseContainer.textContent = 'FELIZ DIA INTERNACIONAL DA MULHER';

        mostrarFraseBtn.remove();
    });
});
