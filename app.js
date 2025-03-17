let listaAmigos = [];
let listaAmigosHTML = document.getElementById("listaAmigos");
let amigoSorteadoHTML = document.getElementById("resultado");

const adicionarAmigo = () => {
  let novoAmigo = document.getElementById("amigo").value.trim();

  if (novoAmigo == "" || novoAmigo == undefined) {
    alert("Por favor, insira um nome.");
    return;
  }

  listaAmigos.push(novoAmigo);
  console.log(novoAmigo);
  console.log(listaAmigos);

  document.getElementById("amigo").value = "";

  atualizarListaHTML();
};

const atualizarListaHTML = () => {
  listaAmigosHTML.innerHTML = "";
  listaAmigos.forEach((amigo) => {
    listaAmigosHTML.innerHTML += `<li>${amigo}</li>`;
  });
};

const sortearAmigo = () => {
  if (listaAmigos.length == 0) {
    alert("Não é possível sortear: a lista está vazia.");
  }

  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  let amigoSorteado = listaAmigos[indiceAleatorio];

  amigoSorteadoHTML.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;

  listaAmigos.splice(indiceAleatorio, 1);

  console.log(amigoSorteado);
  console.log(listaAmigos);
};
