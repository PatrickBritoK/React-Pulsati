import { useState } from "react";
import { Inicio } from "./pages/inicio"
import { Login } from "./pages/login"


export function Menu() {
  const [opcao, setOpcao] = useState<number>(1);

  const paginaInicio = () => {
    setOpcao(1);
    alert(opcao);
  };

  const paginaLogin = () => {
    setOpcao(2);
    alert(opcao);
  };
  return (
    <body>
  <header className="header">
  <div className="logo">
    <a onClick={ paginaInicio } ><img src="../src/assets/maverixLogo.png" /></a>
  </div>

  <div className="nav">
    <a href="#">Sobre</a>
    <a href="#">Programas</a>
    <a href="#">Recursos</a>
  </div>

  <div className="btn-header">
    <div className="acessar">
      <a onClick={ paginaLogin }target="_blank"><button>Acessar</button></a>
    </div>

    <div className="cadastro">
      <a href=""><button>Cadastre-se</button></a>
    </div>
  </div>
</header>
{opcao == 1 ? <Inicio /> : <Login/>}
</body>
 
  );
}