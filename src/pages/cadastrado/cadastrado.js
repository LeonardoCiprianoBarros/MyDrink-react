import React from 'react'
import { Link } from 'react-router-dom'
import './cadastrado.css'
const cadastrado = () => {
  return (
    <div>
        <h1 className='text-center'>Você foi Cadastrado com sucesso</h1>
        <label className='label'> 
      Faça seu
      <strong>
              <Link className='link' to="/Login">&nbsp;Login</Link>
            </strong>
      </label>
    </div>
  )
}

export default cadastrado