function main() {
  const form_signup = document.getElementById("form-signup");
  const mensagem = document.getElementById("mensagem");

  form_signup.onsubmit = async (event) => {
    event.preventDefault();
    const name = get_element_value("nome");
    const email = get_element_value("email");
    const username = get_element_value("usuario");
    const password = get_element_value("senha");
    const confirm_password = get_element_value("confirmacao_senha");

    const data = { name, email, username, password, confirm_password };

    const url = "https://apitarefas.onrender.com/api/signup/";
    const opcoes = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, opcoes);

    if (!response.ok) {
      const result_data = await response.json();
      console.error(result_data);
      alert(`Error: ${result_data["detail"]}`);
    } else {
      mensagem.style.display = "block";
     
      setTimeout(() => {
        window.location.replace("login.html");
      }, 7000);
    }
  };
}

function get_element_value(id) {
  return document.getElementById(id).value;
}

main();
