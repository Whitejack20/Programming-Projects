// Display a message for the user
alert('Boas vindas ao jogo do número secreto!');
// Variable definition
let numeroSecreto = 9;
// Display the variable on the Console tab
console.log(numeroSecreto);
// Storage and user input
let chute;
let tentativas = 0;

// While Loop
while(chute != numeroSecreto) {

    chute = prompt('Escolha um número entre 1 e 30')

    // Simple Conditional
    if (chute == numeroSecreto) {
        // alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`) // Template Strings
        alert('Isso aí! Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas + ' tentativas.'); // Alternative
    }
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        }
        else {
            alert(`O número secreto é maior que ${chute}`)
        }
        tentativas++;
    }

}
