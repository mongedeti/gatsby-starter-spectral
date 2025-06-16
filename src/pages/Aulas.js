import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Cursos Tech</h2>
        <p>Cursos sobre tecnologia em um escopo que abrange assunto e complexidade variados.</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
			<table className="alt">
			  <tbody>
				<tr>
				  <td>
					<a
					  href="https://drive.google.com/uc?export=download&id=1hQdhWmHVuXurwo3gVLu4jDaWwQ3b5stO"
					  target="_blank"
					  rel="noopener noreferrer"
					>
					  Criptomoedas - Episódio 1
					</a>
				  </td>
				</tr>
				<tr>
				  <td>
					<a
					  href="https://drive.google.com/uc?export=download&id=SEU_ID_2"
					  target="_blank"
					  rel="noopener noreferrer"
					>
					  Criptomoedas - Episódio 2
					</a>
				  </td>
				</tr>
				<tr>
				  <td>
					<a
					  href="https://drive.google.com/uc?export=download&id=SEU_ID_3"
					  target="_blank"
					  rel="noopener noreferrer"
					>
					  Criptomoedas - Episódio 3
					</a>
				  </td>
				</tr>
			  </tbody>
			</table>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
