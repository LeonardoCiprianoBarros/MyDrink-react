import Login from './pages/login/Form';
import Cadastrado from './pages/cadastrado/cadastrado'
import './Styles.css';
import Cadastro from './pages/cadastro/cadastro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contato from './pages/Contato/Contato'


function App() {
  return (
            
     <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/Login" element={<Login /> }/>
          <Route path="/Cadastro" element={<Cadastro /> }/>
          <Route path='/Cadastrado' element={<Cadastrado />} />
          <Route path= '/' element={< Home /> }/>
          <Route path='/Contato' element={<Contato /> }/>
        </Routes>
     </Router>
        
  
  
  
  );
}

export default App;
