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
              <a href="#three" className="button primary">
                Explore
              </a>
              <a href="../assets/images/OVM_SADTELET_ONCO_V1.sql" download>
                <i class="fas fa-file-download"></i> Baixar arquivo.pdf
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="three">
        <a href="#three" className="more">
          Saiba mais
        </a>
      </Scroll>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Para quem é este site?</h2>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Pessoas acima dos 50 anos</h3>
            <p>
              Pessoas acima dos 50 anos que desejam aprender tecnologia de forma gradual e acessível, 
              independentemente de sua experiência prévia.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aposentados em busca de novos desafios</h3>
            <p>
              Aposentados que desejam manter suas mentes ativas, expandir seus horizontes e estarem 
              atualizados com a evolução tecnológica.
            </p>
          </li>
        </ul>
      </div>
    </section>
  
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            O que você encontra aqui?
          </h2>
          <p>
            Oportunidade de aprender tecnologia do seu jeito, de acordo com a sua velocidade
            e focado nas suas metas específicas.
          </p>
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
                Aulas TECH VIP
          </a>
          <p>
            Aulas particulares sobre tecnologia (presenciais ou online),
            priorizando sempre os assuntos de seu interesse.
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
            <h3>Você sabe tudo?</h3>
            <p>
              Não, sou um eterno aprendiz, mas se quiser aprender algo que eu ainda não conheço em tecnologia prometo 
                  que vou estudar pra te trazer tudo de forma resumida e compreensível.
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

            Me chamo Gabriel, sou apaixonado por tecnologia da informação e carrego comigo
            uma bagagem de longos anos de estudo, trabalho, pesquisa e ensino sobre este 
            universo. Acredito genuinamente no potencial transformador da tecnologia e por
            isso te convido a mergulhar neste oceano comigo, onde poderei compartilhar 
            conhecimentos e experiências que te capacitarão a se sentir cada vez mais 
            familiarizado com o mundo digital.

            Um forte abraço!
          </p>
        </header>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
