import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="three">
              <a href="#one" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="three">
        <a href="#one" className="more">
          Saiba mais
        </a>
      </Scroll>
    </section>
 
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            O que você encontra aqui?
          </h2>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <a href="https://mongedeti.com.br/Aulas" className="button primary">
                Aulas Tech
          </a>
          <p>
            Aulas particulares sobre tecnologia (presenciais ou online),
            priorizando sempre os assuntos de seu interesse.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <a href="https://mongedeti.com.br/Aulas" className="button primary">
                Livraria Tech
          </a>
          <p>
            Livros autorais para diferentes níveis de conhecimento. Aprenda
            o básico, descubra alguma área de seu interesse ou entenda os 
            detalhes do mundo da tecnologia compartilhados por quem vive isso
            há décadas.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <a href="https://mongedeti.com.br/Aulas" className="button primary">
                Livraria Kids
          </a>
          <p>
            Livros infantis com histórias leves sobre amizade, coragem, amor e família. 
            Agora você pode ler para seus filhos e netos histórias que vão educar e 
            inspirar as novas gerações.
          </p>
        </div>
      </section>
    </section>

    <section id="two" className="wrapper style2 special">
      <div className="inner">
        <header className="major">
          <h2>Perguntas frequentes</h2>
        </header>
        <ul className="features">
          <li className="one">
            <h3>Por que Monge de TI?</h3>
            <p>
              Durante a minha jornada em TI, me deparei com pessoas agradáveis mas também aquelas mais complicadas. 
              Foram necessárias a serenidade e a sabedoria de um monge para superar esses desafios e entregar soluções
              de qualidade.
            </p>
          </li>
          <li className="two">
            <h3>O que eu posso aprender por aqui?</h3>
            <p>
              É justamente você que comanda a pauta. Analise o que é importante para você, necessário ou até mesmo um 
                gosto. Estarei aqui para te ajudar, te orientando e guiando para que aprenda coisas realmente úteis.
            </p>
          </li>
          <li className="three">
            <h3>Histórias infantis em um site de tecnologia?</h3>
            <p>
              Sim, sou pai e descobri que a tecnologia pode ser uma aliada poderosa na criação de conteúdo de qualidade
                  para os mais jovens.
            </p>
          </li>
          <li className="four">
            <h3>Consegue me ensinar a utilizar instagram e apps relacionados?</h3>
            <p>
              Infelizmente não. Este tipo de conteúdo é super fácil de encontrar por aí.
            </p>
          </li>
          <li className="five">
            <h3>Você trabalha com produtos e soluções Apple?</h3>
            <p>
              Não. O objetivo aqui é te orientar e te ensinar, principalmente em um cenário de baixo custo e acessibilidade.
            </p>
          </li>
          <li className="six">
            <h3>Você monta e formata computadores?</h3>
            <p>
              Infelizmente não, mas posso te ensinar a fazer isso.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Meu propósito</h2>
          <p>
            Olá, que bom ter você por aqui! 

            Sou apaixonado por tecnologia da informação e carrego comigo
            uma bagagem de longos anos de estudo, trabalho, pesquisa e ensino sobre este 
            universo. Acredito genuinamente no potencial transformador da tecnologia e por
            isso te convido a mergulhar neste oceano comigo, seja no aprendizado gradual e
            acessível através das aulas e livros de tecnologia, como também no consumo de conteúdos
            voltados à leitura e entretenimento para os mais jovens.

            Um forte abraço!
          </p>
        </header>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
