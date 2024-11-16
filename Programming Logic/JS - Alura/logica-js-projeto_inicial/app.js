// Display a message for the user
alert('Boas vindas ao jogo do número secreto!');
// Variable definition
let numeroSecreto = 9;
// Display the variable on the Console tab
console.log(numeroSecreto)
// Storage and user input
let chute = prompt('Escolha um número entre 1 e 30')

// Simple Conditional
if (chute == numeroSecreto) {
    // alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`) // Template Strings
    alert('Isso aí! Você descobriu o número secreto ' + numeroSecreto) // Alternative
}
else {
    alert('Você errou :(')
}
