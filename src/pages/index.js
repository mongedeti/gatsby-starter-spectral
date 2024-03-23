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
            Livros, apostilas, dicas, cursos e até aulas VIP presenciais
            <br />
            estão entre as possibilidades para você mergulhar no mundo da tecnologia!
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Magna primis lobortis
            <br />
            sed ullamcorper
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Tortor dolore feugiat
            <br />
            elementum magna
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
