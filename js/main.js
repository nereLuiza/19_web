//js/main.js
const botaoAutor = document.getElementById('botaoAutor');
const respAutor = document.getElementById('respAutor');

botaoAutor.addEventListener('click', pegarInformacao);

const urlBase = "https://back_end_na_vercel";

async function pegarInformacao() {

  respAutor.innerText = "Aguarde... "

  try {
    const response = await fetch(urlBase);

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const data = await response.json();
    respAutor.innerText = data.nome;
  } catch (error) {
    console.error("Erro:", error);
    respAutor.innerText = `Erro: ${error}`;
  }
}
