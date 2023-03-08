import '../pages/stylelogin.css'

export function Login(){
    return(
      
      <main>
      <div className="transparent">
        <div className="login">
          <div className="login-left">
            <img className="img-login-left" src="../src/assets/copyright-animate.svg" />
          </div>

          <div className="card-right">
            <h1>LOGIN</h1>

            <div className="usuario">
              <label>Usuário</label>
              <input
                type="text"
                name="usuario"
                placeholder="Digite seu ID ou usuário"
              />
            </div>

            <div className="senha">
              <label className="senha">Senha</label>
              <input
                type="password"
                name="senha"
                placeholder="Digite a sua senha"
              />
            </div>

            <button className="btn-login">Entrar</button>

            <span>OU</span>
            <span>Acessar com</span>
            <div className="icons-card">
              <a href="https://pt-br.facebook.com/"><img className="fb" src="../src/assets/icon-facebook.png" /></a>
              <a href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&ifkv=AWnogHdTwCuZERSsgQlHbUBpeS2elvL-EDjFGVZOaEt6AqxTkWads38CFmBChClAV2CIXll-UgOCEA&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><img className="google" src="../src/assets/icon-google.png" /></a>
            </div>
          </div>
        </div>
      </div>
    </main>
)

}

export default Login;
