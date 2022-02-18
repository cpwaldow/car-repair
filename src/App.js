import Problems from './Problems';
import Veiculo from './Veiculo';

import './app.css';

function App() {
  const primeiro = {
    date: '20/09/2018',
    products: [
      'aditivo para raiador',
      'vela de ignição',
      'kit correia dentada',
    ],
    services: [
      'alinhamento + balanceamento',
      'substituição vela de ignição',
      'substituição correia dentada / distribuição / tensor',
      'limpeza de bico',
    ],
    price: 1084,
  };

  const segundo = {
    date: '14/12/18',
    products: ['disco de freio', 'dianteiro ventilado', 'pastilha de freio'],
    services: [
      'substituição disco e pastilha de freio dianteiro',
      'sangria dos freios',
    ],
    price: 530,
  };

  const terceiro = {
    date: '13/04/2019',
    products: ['amortecedor dianteiro', 'kit amortecedor dianteiro'],
    services: [
      'alinhamento + balanceamento',
      'substituição amortecedor dianteriro / mola / jogo de batente',
    ],
    price: 1227,
  };

  const quarto = {
    date: '11/06/2019',
    products: ['valvula comp'],
    services: ['sangria de freios', 'troca de eixo traseiro'],
    price: 500,
  };

  const quinto = {
    date: '21/06/2019',
    products: ['kit amortecedor dianteiro', 'amortecedor dianteiro'],
    services: ['alinhamento', 'troca kit amortecedor dianteiro'],
    price: 999.8,
  };

  const sexto = {
    date: '07/10/2019',
    products: ['valvula freio traseiro', 'rolamento traseiro direito'],
    services: [
      'limpeza e ajuste freio traseiro',
      'troca do rolamento traseiro',
    ],
    price: 336,
  };

  const setimo = {
    date: '11/02/2020',
    products: [
      'filtro de combustível',
      'borracha do bico injetor',
      'vela de ignição',
      'bobina de ignição',
    ],
    services: ['limpeza de bico', 'troca velas de ignição e bobina'],
    price: 792,
  };

  const oitavo = {
    date: '14/04/2021',
    products: [
      'filtro de oleo',
      'filtro de ar',
      'filtro de combustivel',
      'oleo',
      'coxim inferior cambio',
      'sensor pressao direção',
      'bieleta (esquerda / direita)',
      'bucha barra estabilizadora',
      'coxim motor lado direito',
    ],
    services: [
      'higienização do ar-condicionado',
      'alinhamento + balanceamento',
      'substituição coxim motor',
      'substituição barra estabilizadora',
    ],
    price: 1799,
  };

  const nono = {
    date: '03/11/2021',
    products: ['catalizador'],
    services: ['remover e instalar catalizador'],
    price: 1268,
  };

  const decimo = {
    date: '01/02/2022',
    products: [
      'terminal de direção direito',
      'kit embreagem',
      'retentor do volante',
      'rolamento de roda dianteiro esquerdo',
      'homocinetica lado esquero lado roda',
      'cubo de roda dianteiro esquerdo',
    ],
    services: [
      'alinhamento',
      'troca kit embreagem',
      'substituição rolamento de roda dianteira',
    ],
    price: 2102,
  };

  const roda = {
    date: '15/08/2020',
    products: ['2 rodas traseitas', 'valvula'],
    services: [],
    price: 838,
  };

  const sandero = {
    name: 'sandero',
    marca: 'renault',
    age: 2008,
    motor: '1.6 16V',
    km: 105.5,
  };

  const valorTotal =
    primeiro.price +
    segundo.price +
    terceiro.price +
    quarto.price +
    quinto.price +
    sexto.price +
    setimo.price +
    oitavo.price +
    nono.price +
    decimo.price +
    roda.price;

  return (
    <div className='container'>
      <Veiculo carro={sandero} />
      <p className='totalPrice'>
        Valor total em manutenção: R$ {valorTotal.toLocaleString()}
      </p>
      <Problems repato={decimo} />
      <Problems repato={nono} />
      <Problems repato={oitavo} />
      <Problems repato={roda} />
      <Problems repato={setimo} />
      <Problems repato={sexto} />
      <Problems repato={quinto} />
      <Problems repato={quarto} />
      <Problems repato={terceiro} />
      <Problems repato={segundo} />
      <Problems repato={primeiro} />
    </div>
  );
}

export default App;
