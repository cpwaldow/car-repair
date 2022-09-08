import React, { Component } from 'react';

import carro from './img/sandero.jpg';
import './veiculo.css';

class Veiculo extends Component {
  render() {
    const { name, marca, age, motor, km } = this.props.carro;
    return (
      <React.Fragment>
        <h1>Histórico de Manutenção</h1>
        <img src={carro} alt='carro' />
        <p>
          {marca} {name} {motor}, {age}
        </p>
        <p>KM: {km}</p>
      </React.Fragment>
    );
  }
}

export default Veiculo;
