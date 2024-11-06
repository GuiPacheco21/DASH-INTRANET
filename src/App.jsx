import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Financeiro from './Components/Financeiro/Financeiro';
import CadastroEntrada from './Components/Financeiro/CadastroEntrada';
import CadastroSaida from './Components/Financeiro/CadastroSaida';
import Relatorios from './Components/Financeiro/Relatorios';
import CategoriasPersonalizadas from './Components/Financeiro/CategoriasPersonalizadas';
import TransacoesRecorrentes from './Components/Financeiro/TransacoesRecorrentes';
import PlanejamentoOrcamentario from './Components/Financeiro/PlanejamentoOrcamentario';
import Clientes from './Components/Clientes';
import Noticias from './Components/Noticias';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/financeiro/cadastro-entrada" element={<CadastroEntrada />} />
          <Route path="/financeiro/cadastro-saida" element={<CadastroSaida />} />
          <Route path="/financeiro/relatorios" element={<Relatorios />} />
          <Route path="/financeiro/transacoes-recorrentes" element={<TransacoesRecorrentes />} />
          <Route path="/financeiro/planejamento-orcamentario" element={<PlanejamentoOrcamentario />} />
          <Route path="/financeiro/categorias" element={<CategoriasPersonalizadas />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/noticias" element={<Noticias />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
