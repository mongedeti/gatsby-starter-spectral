import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Livros</h2>
        <p>Livros autorais em diversos níveis de aprendizado, para que você consiga aprender gradativamente, na sua velocidade.</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Em breve</h3>
          <p>
            Em breve.
          </p>

          <p>
            Em breve.
          </p>

          <hr />

          <h4>Em breve</h4>
          <p>
            Em breve.
          </p>

          <p>
            Em breve.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
