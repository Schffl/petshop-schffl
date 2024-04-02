import React from 'react'
import Produtos from '../../Produtos/Produtos'
import Title from '../../Title'
import style from './Loja.module.css'
import ServiçosV2 from '../../Produtos/Serviçosv2'

const Loja = () => {
  return (
    <div className={style.container_geral_prod}>
      <Title text="Nossos Serviços"/>
      <div className={style.produtos_container}>
        <ServiçosV2 amount={112} columns={5} sizeContainer={1200}/>
      </div>
    </div>
  )
}

export default Loja