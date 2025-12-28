import './App.css'
import Home from './pages/Home'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import { Helmet } from 'react-helmet-async'

function App() {
  return (
    <>
      <Helmet>
        <title>AURA - The Original Sportellers | Transformando Talento em Potência</title>
        <meta name="description" content="A AURA é uma agência boutique do Grupo SISU focada em posicionamento, branding e criatividade para atletas. Transformamos presença em marca e narrativas em valor." />
        <meta name="keywords" content="aura, sportellers, marketing esportivo, branding para atletas, gestão de imagem, sisu group" />
        <meta name="theme-color" content="#EFEDE7" />
      </Helmet>
      <LoadingScreen />
      <Home />
    </>
  )
}

export default App
