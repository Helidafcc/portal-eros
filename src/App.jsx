import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Biblioteca from './pages/Biblioteca.jsx'
import Oraculos from './pages/Oraculos.jsx'
import Tarot from './pages/Tarot.jsx'
import NotFound from './pages/NotFound.jsx'
import Shell from './components/Shell.jsx'

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/oraculos" element={<Oraculos />} />
        <Route path="/tarot" element={<Tarot />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Shell>
  )
}
