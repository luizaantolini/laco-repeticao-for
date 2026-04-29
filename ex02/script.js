let soma = 0;

for (let i = 1; i <= 10; i++) {
    let num = Number(prompt("Digite um número (Repita esse processo 10 vezes):"));
    soma = soma + num;
}
alert("O resultado da soma dos 10 números é: " + soma);