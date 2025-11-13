const botaoFecharMenu = document.getElementById('botao-fechar-menu');
const menuLateral = document.getElementById('menu-lateral');
const iconExibirMenu = document.querySelector('#menu-lateral div button img');


botaoFecharMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-fechado');
    iconExibirMenu.classList.toggle('icon-abrir-menu');
});

