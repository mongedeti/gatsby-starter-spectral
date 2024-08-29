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
					<h5>Alternate</h5>
						<table className="alt">
							<thead>
								<tr>
									<th>Name</th>
									<th>Description</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Item One</td>
									<td>Ante turpis integer aliquet porttitor.</td>
									<td>29.99</td>
								</tr>
								<tr>
									<td>Item Two</td>
									<td>Vis ac commodo adipiscing arcu aliquet.</td>
									<td>19.99</td>
								</tr>
								<tr>
									<td>Item Three</td>
									<td> Morbi faucibus arcu accumsan lorem.</td>
									<td>29.99</td>
								</tr>
								<tr>
									<td>Item Four</td>
									<td>Vitae integer tempus condimentum.</td>
									<td>19.99</td>
								</tr>
								<tr>
									<td>Item Five</td>
									<td>Ante turpis integer aliquet porttitor.</td>
									<td>29.99</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colSpan="2"></td>
									<td>100.00</td>
								</tr>
							</tfoot>
						</table>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
