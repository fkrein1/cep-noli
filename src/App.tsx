import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { BuscarCep } from './pages/BuscarCep';
import { BuscarEndereco } from './pages/BuscarEndereco';
import { Home } from './pages/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscarendereco" element={<BuscarEndereco />} />
          <Route path="/buscarcep" element={<BuscarCep />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
