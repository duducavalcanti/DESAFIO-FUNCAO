function calcularRank(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  // Estrutura de decisão para realizar o ranqueamento do jogador
  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Estrutura de repetição para executar o código em loop
while (true) {

  // Entrada da quantidade de vitórias
  let vitorias = prompt("Digite a quantidade de vitórias (ou digite 'sair' para encerrar):");

  if (vitorias === null || vitorias.toLowerCase() === "sair") {
    alert("Programa encerrado.");
    break;
  }

  // Entrada da quantidade de derrotas
  let derrotas = prompt("Digite a quantidade de derrotas (ou digite 'sair' para encerrar):");

  if (derrotas === null || derrotas.toLowerCase() === "sair") {
    alert("Programa encerrado.");
    break;
  }

  let vitoriasJogador = Number(vitorias);
  let derrotasJogador = Number(derrotas);
  
  // Validação de números
  if (isNaN(vitoriasJogador) || isNaN(derrotasJogador)) {
    alert("Por favor, digite apenas números válidos.");
    continue;
  }

  // Saída
  let resultado = calcularRank(vitoriasJogador, derrotasJogador);
  console.log(resultado);
  alert(resultado);
}