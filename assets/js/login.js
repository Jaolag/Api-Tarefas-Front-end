function main() {
  const input_usuario = document.getElementById("usuario");
  const input_senha = document.getElementById("senha");
  const form_login = document.getElementById("form-login");
  const mensagemDiv = document.getElementById("mensagem");
  const mensagemErroDiv = document.getElementById("mensagem-erro");

  form_login.onsubmit = async (event) => {
    event.preventDefault();
    const username = input_usuario.value;
    const password = input_senha.value;

    const login_url = "https://apitarefas.onrender.com/api/token/";
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json"
      }
    };

    const response = await fetch(login_url, opcoes);
    const result = await response.json();
    if (response.status === 200) {
      const token = result["access"];
      mensagemDiv.style.display = "block"; // Exibe a mensagem de sucesso
      input_senha.value = "";
      input_usuario.value = "";
      input_usuario.focus();
      localStorage.setItem("token_tarefas", token);
      setTimeout(() => {
        window.location.replace("index.html");
      }, 7000); // Timer de 7 segundos antes de redirecionar
    } else {
      mensagemErroDiv.style.display = "block"; // Exibe a mensagem de erro
      setTimeout(() => {
        mensagemErroDiv.style.display = "none"; // Esconde a mensagem de erro após 3 segundos
      }, 4000); // Timer de 3 segundos para esconder a mensagem de erro
    }
  };
}

main();