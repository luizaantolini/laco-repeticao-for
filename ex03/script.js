let numero = Number(prompt("Digite um número:"));
let resultado = "Tabuada do " + numero + ":\n";

for (let i = 1; i <= 10; i++) {
    let conta = numero * i;
    
    resultado += numero + " x " + i + " = " + conta + "\n";
}

alert(resultado);