import React from 'react'
import './Contato.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function TextControlsExample() {
  return (
    <div>
      <NavBar/>
    <div className='Contato-container'>
      <Form className='contato-form '>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite seu Email para contato" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control id='nome' type="text"  placeholder="Digite seu Nome" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSelect">
        <Form.Label>Assunto</Form.Label>
        <Form.Control
          as="select">
          <option value="1">3</option>
          <option value="2">2</option>
          <option value="3">1</option>
        </Form.Control>
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensagem:</Form.Label>
        <Form.Control as="textarea" rows={6} placeholder="Digite sua Mensagem, retornaremos sua mensagem o mais rapido possivel!!"/>
      </Form.Group>
      <div className='botoes-container'>
      <Button className='botoes' variant="success">Enviar</Button>{' '}
      <Button className='botoes' variant="danger">cancelar</Button>{' '}
      </div>
      
    </Form>
    </div>
    
    <Footer></Footer>
    </div>
  );
}

export default TextControlsExample;