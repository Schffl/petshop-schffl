import React from 'react'
import Button from '../../Button/Button'
import style from './Contato.module.css'

const Contato = () => {
  return (
    <>
      <h1 style={{textAlign: 'center', marginTop: '100px'}}>Cadastrar Usuário e Pet</h1>
    <div className={style.container_form}>
      <form action='post' className={style.form}>
        <label for="name">Nome:</label>
        <input style={{marginBottom: '20px'}} type="text" id="name" name="name" />
        <label for="email">Email:</label>
        <input style={{marginBottom: '20px'}} type="text" id="name" name="name" />
        <label for="name">Endereço:</label>
        <input style={{marginBottom: '20px'}} type="text" id="name" name="name" />
        <label for="name">Telefone:</label>
        <input style={{marginBottom: '20px'}} type="text" id="name" name="name" />
        <label for="name">Nome do Pet:</label>
        <input style={{marginBottom: '20px'}} type="text" id="name" name="name" />
        <label for="name">Raça:</label>
        <input style={{marginBottom: '20px'}} type="text" id="name" name="name" />
        <label for="name">Temperamento:</label>
        <input style={{marginBottom: '20px'}} type="text" id="name" name="name" />
        <label for="name">Tipo:</label>
        <input type="text" id="name" name="name" />
        
        <Button text='enviar'/>
      </form>
    </div>
    </>
  )
}

export default Contato