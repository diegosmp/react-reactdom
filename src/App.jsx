import './App.css'
import Aside from './pages/Aside/Aside'
import Footer from './pages/Footer/Footer'
import Header from './pages/Header/Header'
import Main from './pages/Main/Main'

export default function App() {
  return (
    <div className="app">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  )
}