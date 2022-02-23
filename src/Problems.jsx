import React, { Component } from 'react';

import './problems.css';
import { Accordion } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class Problems extends Component {
  render() {
    const { date, price, products, services } = this.props.repato;
    const servicesValidation = () => {
      if (services.length !== 0) {
        return <p>Serviços:</p>;
      } else {
        return null;
      }
    };
    return (
      <section className='container acc-section'>
        <Accordion>
          <Accordion.Item eventKey='0' className='acc-item'>
            <Accordion.Header>Data do reparo: {date}</Accordion.Header>
            <Accordion.Body>
              <p>R$: {price}</p>
              <p>Produtos:</p>
              <ul>
                {products.map((produto) => (
                  <li key={produto}>{produto}</li>
                ))}
              </ul>
              {servicesValidation()}
              <ul>
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    );
  }
}

export default Problems;
