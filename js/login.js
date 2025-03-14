const botaoLogin = document.querySelector('#bt-entrar');
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
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(dados)
    });

    console.log(response);

    if (!response.ok) {
      throw new Error("Email/Senha incorretos! - " + response.status);
    }

    const data = await response.json();

    localStorage.setItem('jwt', data.token);

    window.location.href = 'home.html';

  } catch (error) {
    areaMensagem.style = "color:red";
    areaMensagem.innerHTML = error;
  }
}