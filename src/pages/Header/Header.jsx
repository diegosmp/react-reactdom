import './style.css'

export default function Header() {
    return (
        <header>
        <div className="header-content">
          <h1>Logo</h1>
          <nav className="link-menu">
            <a href="#">Entrar</a>
            <a href="#">Cadastrar</a>
          </nav>
        </div>
      </header>
    )
}