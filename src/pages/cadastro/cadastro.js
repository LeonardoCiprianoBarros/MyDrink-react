import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../Styles.css'
import { Link, useNavigate } from "react-router-dom";
import "./cadastro.css";



function Cadastro() {
    const navigate = useNavigate();
    
        const Acao = () => {
        navigate("/Cadastrado");
    }


  return (
    <div className='Container'>
    <Form className='needs-validation'>
        <h1 className='text-center'>My  Drink</h1>
      <Form.Group className="mb-3 was-validated" controlId="formBasicEmail">
        <Form.Label >Digite seu email</Form.Label>
        <Form.Control type="email" placeholder="Email" required/>
      </Form.Group>

      <Form.Group className="mb-3 was-validated" controlId="formBasicPassword">
        <Form.Label>Crie uma senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" required/>
      </Form.Group>

      <Form.Group className="mb-3 was-validated" controlId="Segundo">
        <Form.Label>Repita sua senha</Form.Label>
        <Form.Control id="Segundo" type="password" placeholder="Sua senha novamente" required/>
      </Form.Group>
      
      
      <Button 
        id='buto' className='btn' variant="primary" type="submit" onClick={Acao}>
        Cadastrar
      </Button>
      <label  className='text-center label' style={{}}> 
      já tem uma conta?
      <strong>
              <Link className='link' to="/Login">&nbsp; Entre</Link>
            </strong>
      </label>

     
    </Form>
    </div>
  );
}

export default Cadastro;