const botaoLogin = document.querySelector('entrar');
botaoLogin.addEventListener('click', autenticar);

const areaMensagem = document.getElementById('msg');

async function autenticar(e) {
  e.preventDefault(); 

  document.getElementById('msg').innerText = "Aguarde... ";

  const dados = {
    email: document.getElementById('email').value,
    senha: document.getElementById('senha').value
  };

  const url = "https://13-web.vercel.app/login";

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    });

    if (!response.ok) {
      throw new Error("Email/Senha incorretos! - " + response.status);
    }

    const data = await response.json();

    localStorage.setItem('jwt', data.token);

    areaMensagem.style = "color:green";
    areaMensagem.innerHTML = "Usuário Autenticado com Sucesso! <br> Token: " + data.token;

  } catch (error) {
    areaMensagem.style = "color:red";
    areaMensagem.innerHTML = error;
  }
}