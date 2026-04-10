import { useState } from 'react'
import './App.css'

export default function App() {
  const [carrinho, setCarrinho] = useState(0)
  const [isVerMais, setIsVerMais] = useState(false)

  return (
    <main className="container">
      <header className="header">
        <h1 className="logo">Petz</h1>
        <div className="icons">
          <span>📞</span>
          <span>❤️</span>
          <span>🛒 ({carrinho})</span>
          <button className='btnZerar' onClick={() => setCarrinho(0)}>Zerar</button>
        </div>
      </header>

      <h2 className="titulo">Produtos recomendados</h2>

      <div className="grid">

        <div className="card">
          <span className="badge">28% OFF</span>
          <div className="img">🍓</div>
          <h3>Brinquedo Morango</h3>
          <p className="preco">R$ 35,99</p>
          <button className="add" onClick={() => setCarrinho(carrinho + 1)}>+</button>
        </div>

        <div className="card">
          <span className="badge">25% OFF</span>
          <div className="img">🧴</div>
          <h3>Creme Hidratante</h3>
          <p className="preco">R$ 26,24</p>
          <button className="add" onClick={() => setCarrinho(carrinho + 1)}>+</button>
        </div>

        <div className="card">
          <span className="badge">15% OFF</span>
          <div className="img">🥣</div>
          <h3>Porta Ração</h3>
          <p className="preco">R$ 50,99</p>
          <button className="add" onClick={() => setCarrinho(carrinho + 1)}>+</button>
        </div>

        <div className="card">
          <span className="badge">15% OFF</span>
          <div className="img">🏠</div>
          <h3>Casinha Pet</h3>
          <p className="preco">R$ 84,99</p>
          <button className="add" onClick={() => setCarrinho(carrinho + 1)}>+</button>
        </div>

        <div className="card">
          <span className="badge">10% OFF</span>
          <div className="img">🧳</div>
          <h3>Caixa Transporte</h3>
          <p className="preco">R$ 69,99</p>
          <button className="add" onClick={() => setCarrinho(carrinho + 1)}>+</button>
        </div>

        <div className="card">
          <span className="badge">18% OFF</span>
          <div className="img">🛏️</div>
          <h3>Cama Pet</h3>
          <p className="preco">R$ 64,91</p>
          <button className="add" onClick={() => setCarrinho(carrinho + 1)}>+</button>
        </div>
      </div>
      <div className='verMais'>
        <button className='btnVerMais' onClick={() => setIsVerMais(!isVerMais)}>Ver mais</button>
      </div>

      {isVerMais && (
        <>
        <div className="grid aparecer">
          <div className="card">
            <span className="badge">20% OFF</span>
            <div className="img">🦴</div>
            <h3>Osso Mastigável</h3>
            <p className="preco">R$ 19,90</p>
            <button className="add" onClick={() => setCarrinho(carrinho + 1)}>+</button>
          </div>

          <div className="card">
            <span className="badge">30% OFF</span>
            <div className="img">🐕</div>
            <h3>Pelúcia Cachorro</h3>
            <p className="preco">R$ 29,90</p>
            <button className="add" onClick={() => setCarrinho(carrinho + 1)}>+</button>
          </div>

          <div className="card">
            <span className="badge">12% OFF</span>
            <div className="img">🥩</div>
            <h3>Ração Premium</h3>
            <p className="preco">R$ 99,90</p>
            <button className="add" onClick={() => setCarrinho(carrinho + 1)}>+</button>
        </div><div className="card">
            <span className="badge">18% OFF</span>
            <div className="img">🪮</div>
            <h3>Escova Pet</h3>
            <p className="preco">R$ 22,50</p>
            <button className="add" onClick={() => setCarrinho(carrinho + 1)}>+</button>
          </div><div className="card">
            <span className="badge">22% OFF</span>
            <div className="img">🛁</div>
            <h3>Shampoo Pet</h3>
            <p className="preco">R$ 34,90</p>
            <button className="add" onClick={() => setCarrinho(carrinho + 1)}>+</button>
          </div><div className="card">
            <span className="badge">15% OFF</span>
            <div className="img">🎾</div>
            <h3>Bola de Borracha</h3>
            <p className="preco">R$ 14,90</p>
            <button className="add" onClick={() => setCarrinho(carrinho + 1)}>+</button>
          </div>  
        </div>
        </>
        )}
      
    </main>
  )
}
