import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Livraria Kids</h2>
        <p>Livros infantis com histórias leves sobre amizade, coragem, amor e família. 
            Agora você pode ler para seus filhos e netos histórias que vão educar e inspirar as novas gerações.</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
			<table className="alt">
				<tbody>
					<tr>
					  <td>
						<a
						  href="https://drive.google.com/uc?export=download&id=zero"
						  target="_blank"
						  rel="noopener noreferrer"
						>
						  Livro 1 (Em breve)
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
