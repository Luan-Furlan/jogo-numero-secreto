function verificarIdade() {
  let nome = prompt("Digite seu nome: ");
  let idade = Number(prompt("Digite sua idade: "));

  if (nome === "" || idade === "") {
    alert("Preencha todos os campos!");
    return; // Interrompe a execução da função se algum campo estiver vazio
  }

  if (idade >= 18) {
    alert(`${nome}, você é maior de idade: ${idade} seja bem vindo a auto escola!.`);
  } else {
    alert(`${nome}, você é menor de idade: ${idade} retorne ano que vem! :(`);
  }
}
verificarIdade();



