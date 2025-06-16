import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Livraria Tech</h2>
        <p>Livros para diferentes níveis de conhecimento. Aprenda o básico, descubra alguma área de seu interesse
	ou entenda os detalhes do mundo da tecnologia compartilhados por quem vive isso há décadas.</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
		<table className="alt">
		  <tbody>
			<tr>
			  <td>
				<a
				  href="https://drive.google.com/uc?export=download&id=1YJsWGIOjNcSguP3dwUFzlKum2AnzcP2J"
				  target="_blank"
				  rel="noopener noreferrer"
				>
				  O mundo corporativo e a tecnologia da informação - Vol. 1
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
				  O mundo corporativo e a tecnologia da informação - Vol. 2
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
				  O mundo corporativo e a tecnologia da informação - Vol. 3
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
