import { verificarAutenticacao } from "/js/autorizar.js"

const urlBase = "https://13-web.vercel.app";

const tabelaCorpo = document.getElementById("tabela-usuarios");
tabelaCorpo.innerHTML = 'Aguarde...';

try {
  const endpoint = '/usuario';
  const urlFinal = urlBase + endpoint;
  const response = await fetch(urlFinal);

  if (!response.ok) {
    throw new Error("Erro na requisição: " + response.status);
  }

  const data = await response.json();
  tabelaCorpo.innerHTML = '';

  // Loop para preencher a tabela
  data.forEach(usuario => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>${usuario.senha}</td>
                <td class="acoes">
                  <a class="botaoVer" href="usuario.html?id=${usuario.id}">Ver</a> | 
                  <a class="botaoAlterar" href="alterar-usuario.html?id=${usuario.id}">Alterar</a> | 
                  <a class="botaoExcluir" href="${usuario.id}">Excluir</a>
                </td>
            `;
    tabelaCorpo.appendChild(linha);
  });

  if(verificarAutenticacao) {
    conteudoProtegido.style.display = "block";
  }
} catch (error) {
  console.error("Erro:", error);
}
