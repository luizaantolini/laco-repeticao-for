let num = Number(prompt("Digite um número:"));
let resultado = "Tabuada do " + num + ":\n";

for (let i = 1; i <= 10; i++) {
    let conta = num * i;
    
    resultado += num + " x " + i + " = " + conta + "\n";
}

alert(resultado);