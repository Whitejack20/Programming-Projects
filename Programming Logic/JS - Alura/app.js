// Display a message for the user
alert('Boas vindas ao jogo do número secreto!');
// Variable definition
let numeroSecreto = parseInt(Math.random() * 10 + 1) // Pseudo-random generation and integer truncation
// Display the variable on the Console tab
console.log(numeroSecreto);
// Storage and user input
let chute;
let tentativas = 1;

// While Loop
while(chute != numeroSecreto) {

    chute = prompt('Escolha um número entre 1 e 10')

    // Simple Conditional
    if (chute == numeroSecreto) {
        break;
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

// Ternary Operator
let palavraTentativa = tentativas > 1 ? ' tentativas.' : ' tentativa.';
// alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`) // Template Strings
alert('Isso aí! Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas + palavraTentativa); // Alternative
