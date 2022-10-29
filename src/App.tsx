import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
   return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/buscarendereco" element={<div>endereco</div> }/>
        <Route path="/buscarcep" element={<div>cep</div> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
