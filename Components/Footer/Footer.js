import React from "react";
import style from "./Footer.module.css";
import dog from "../Assets/beautiful-pet.png";
import dog2 from "../Assets/lovely-pet.png";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <img className={style.img} src={dog} />
        <div className={style.footer_logo}>
          
          <div className={style.container_ul}>
            <ul className={style.ul}>
              <h3>PÁGINAS</h3>
              <Link to="/">Home</Link>
              <Link to="/">Serviços</Link>
              <Link to="/">Produtos</Link>
              <Link to="/">Registrar</Link>
            </ul>
            
            <ul className={style.ul}>
              <h3>RELACIONAMENTO</h3>
              <p className={style.ajuda}>
                Precisa de ajuda com um pedido ou informações sobre produtos?
              </p>
              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: 'center',
                  marginTop: "20px",
                }}
              >
                <FaWhatsapp className={style.icon} />
                <p>(51) 99999-9999</p>
              </Link>
            </ul>
          </div>
          
        </div>
        <img className={style.img} src={dog2} />
      </div>
    </>
  );
};

export default Footer;
