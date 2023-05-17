function main() {
    const input_usuario = document.getElementById("usuario")
    const input_senha = document.getElementById("senha")
    const form_login = document.getElementById("form-login")
  
    form_login.onsubmit = async (event) => {
      event.preventDefault()
      const username = input_usuario.value
      const password = input_senha.value
  
      const login_url = "http://localhost:8000/api/token/"
      const opcoes = {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json"
        }
      }
  
      const response = await fetch(login_url, opcoes)
      const result = await response.json()
      if (response.status === 200) {
        const token = result["access"]
        alert("Login realizado com sucesso!")
        localStorage.setItem("token_tarefas", token)
        window.location.replace("index.html")
        //   alert(`Token: ${token.slice(0, 10)}`)
      } else {
        // const msg = result["detail"]
        // console.log(result)
        alert("Usário e/ou senha incorretos!")
      }
  
      input_senha.value = ""
      input_usuario.value = ""
      input_usuario.focus()
    }
  }
  
  main()
  