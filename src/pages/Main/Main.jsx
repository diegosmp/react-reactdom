import './style.css'

export default function Main() {
    return (
        <main className="main-content">
        <div className="cards">
          <div className="card">
            <div>Card 1</div>
            <span>Descrição</span>
          </div>
          <div className="card">
            <div>Card 2</div>
            <span>Descrição</span>
          </div>
          <div className="card">
            <div>Card 3</div>
            <span>Descrição</span>
          </div>
        </div>
        <div className="separete"></div>
        <div className="newsletter">
          <h1>Título da noticia</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Repudiandae magnam eos architecto quod ut ratione aspernatur, <br />
          mollitia animi veritatis sapiente?</span>
        </div>
      </main>
    )
}