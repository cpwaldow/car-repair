import Problems from './Problems';
import Veiculo from './Veiculo';

import './app.css';

import maintenance from './data.js';

const handleMaintenance = () => {
  return maintenance.map((reparo) => {
    return <Problems repato={reparo} key={reparo.date} />;
  });
};

const handlePrice = () => {
  return maintenance.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0,
  );
};

function App() {
  const sandero = {
    name: 'sandero',
    marca: 'renault',
    age: 2008,
    motor: '1.6 16V',
    km: 106.7,
  };

  return (
    <div className="container">
      <Veiculo carro={sandero} />
      <p className="totalPrice">
        Valor total em manutenção: R$ {handlePrice().toLocaleString()}
      </p>
      {handleMaintenance()}
    </div>
  );
}

export default App;
