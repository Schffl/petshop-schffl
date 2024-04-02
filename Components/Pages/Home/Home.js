import React from "react";
import Cards from "../../Cards/Cards";
import Title from "../../Title";
import style from "./Home.module.css";
import Produtos from "../../Produtos/Produtos";
import ProdutoDestaque from "../../Produtos/ProdutoDestaque";

const Home = () => {
  return (
    <div className={style.home}>
      <Title text="Produtos e Serviços" />
      <div className={style.container_marcas}>
        <p className={style.p}>
          Sempre trazendo os melhores produtos e oferecendo serviço de qualidade.
        </p>
        <Cards />

      </div>

      <Title text="‎" />
      <div className={style.container_destaques}>
        <div>
          <ProdutoDestaque />
        </div>

        <div className={style.container_produtos}>
          <Produtos amount={5}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
