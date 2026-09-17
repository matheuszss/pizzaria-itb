
import './App.css'
import HomeFuncionario from './pages/HomeFuncionario/HomeFuncionario'
// 1. Importamos o BrowserRouter do react-router-dom
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    // 2. Envolvemos tudo com o BrowserRouter para que o <Link> funcione lá dentro
    <BrowserRouter>
      <div>
        <HomeFuncionario />
      </div>
    </BrowserRouter>
  )
}

export default App