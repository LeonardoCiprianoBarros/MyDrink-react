import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../Styles.css'
import { Link, useNavigate } from "react-router-dom";
import './login.css'

function Login() {
  const navigate = useNavigate();
    
        const Acao = () => {
        navigate("/");
    }

  return (
    
    <div className='Container'>
     
    <Form className='needs-validation '>
        <h1 className='text-center'>My  Drink</h1>
      <Form.Group className="mb-3 was-validated" controlId="formBasicEmail">
        <Form.Label >Digite seu E-mail</Form.Label>
        <Form.Control type="email" placeholder=" E-mail" required />
        
      </Form.Group>

      <Form.Group className="mb-3 was-validated" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" required/>
      </Form.Group>
      
      
      <Button id='buto' className='btn' variant="primary" type="submit" onClick={Acao}>
        Entrar
      </Button>
      <label id='label' className='label'> 
      Ainda não tem uma conta?
      <strong>
              <Link className='link' to="/Cadastro">&nbsp; Registre-se</Link>
            </strong>
      </label>
      
    </Form>
    </div>
  );
}

export default Login;