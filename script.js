//recuperando a Caixa Amarela (Quando aberta o menu Hamburguer)
const mobileMenu = document.querySelector("#mobileMenu");

//recuperando o Botão de fechamento
const close = document.getElementById("close");

//recuperando o Botão de Hamburger
const hamburgerButton = document.getElementById("hamburgerButton");

//Adicionando o evento de escutar o click (addEventListener) do mouse sobre o botão de hamburger
hamburgerButton.addEventListener("click", function(){
    //Adicionando o classe "flex" á nossa div mobileMenu
    mobileMenu.classList.add("flex");
})

//Criamos uma função que a ouvir o click do Mouse, ele REMOVA uma Class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar invisível.
close.addEventListener("click", function(){
    mobileMenu.classList.remove("flex");
})