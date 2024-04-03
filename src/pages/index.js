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
              Este site é especialmente projetado para pessoas acima dos 50 anos 
              que desejam aprender tecnologia de forma gradual e acessível, 
              independentemente de sua experiência prévia.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Iniciantes em tecnologia</h3>
            <p>
              Aqueles que estão dando os primeiros passos no mundo da tecnologia 
              e desejam aprender no seu próprio ritmo, sem pressão.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Sem experiência prévia</h3>
            <p>
              Não é necessário ter conhecimento prévio em tecnologia para se beneficiar 
              dos serviços, pois estou aqui para orientar e apoiar os iniciantes em cada 
              etapa do caminho.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Curiosos e interessados em aprender</h3>
            <p>
              Aqueles que têm curiosidade sobre tecnologia e desejam explorar novos horizontes,
              juntem-se aqui, em uma comunidade de aprendizado e descoberta.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aposentados em busca de novos desafios</h3>
            <p>
               Este site é ideal para aposentados que desejam manter suas mentes ativas, expandir
               seus horizontes e se manterem atualizados com as últimas tecnologias, mesmo sem experiência prévia.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Todos que buscam confiabilidade e apoio</h3>
            <p>
              Ambiente acolhedor e amigável, onde todos são bem-vindos e podem aprender com
              confiança, sabendo que têm apoio ao longo da jornada tecnológica.
            </p>
          </li>
        </ul>
      </div>
    </section>
  
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Quais os produtos e serviços que você encontra aqui?
          </h2>
          <p>
            Livros, apostilas, dicas, cursos e até aulas VIP presenciais estão 
            <br />
             entre as alternativas para você mergulhar no mundo da tecnologia!
          </p>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Livros e apostilas
          </h2>
          <p>
            Livros autorais em diversos níveis de aprendizado, para 
            que você consiga entender aos poucos o mundo da tecnologia.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Aplicativos
          </h2>
          <p>
            Aplicativos realmente úteis e que podem
            te ajudar muito no dia a dia.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Aulas Tech VIP
          </h2>
          <p>
            Ofereço este serviço para pessoas realmente interessadas em aulas 
            particulares sobre tecnologia, sejam presenciais ou online. Entre em contato.
          </p>
        </div>
      </section>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Meu propósito</h2>
          <p>
            Olá, que bom ter você por aqui! 

            Me chamo Gabriel, sou completamente apaixonado por tecnologia da informação
            e carrego comigo uma bagagem de longos anos de estudo, trabalho, pesquisa e 
            ensino sobre este universo.
            Acredito genuinamente no potencial transformador da tecnologia e por isso te
            convido a mergulhar neste oceano comigo, onde poderei compartilhar conhecimentos
            e experiências que te capacitarão a se sentir familiarizado com o mundo digital.

            Te espero aqui!
          </p>
        </header>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
