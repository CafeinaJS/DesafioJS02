let cartao = prompt("Informe o número do cartão");
const numerosMask = cartao.length - 4;

alert("*".repeat(numerosMask) + cartao.substring(numerosMask));