import React, { Component } from 'react';

import './problems.css';

class Problems extends Component {
  render() {
    const { date, price, products, services } = this.props.repato;
    return (
      <section className='container'>
        <article>
          <p>Data do reparo: {date}</p>
          <p>R$: {price}</p>
          <p>Produtos:</p>
          <ul>
            {products.map((produto) => (
              <li key={produto}>{produto}</li>
            ))}
          </ul>
          <p>Serviços:</p>
          <ul>
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </article>
      </section>
    );
  }
}

export default Problems;
