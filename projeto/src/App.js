import './App.css';
import Home from './Home.js';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Cart } from './cart.svg';
import { ReactComponent as Logo2 } from './logo2.svg';
import { ReactComponent as Logo3 } from './logo3.svg';
import { ReactComponent as Placa1 } from './placa1.svg';
import { ReactComponent as Placa2 } from './placa2.svg';
import { ReactComponent as Ifood } from './ifood.svg';
import { ReactComponent as Delivery } from './delivery.svg';
import { ReactComponent as Placa3 } from './placa3.svg';
import Card from './card.js';

   

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <Logo className="App-Logo"/>
        <Cart className="App-Cart"/>
        <Logo2 className="App-Logo2"/>
        <Logo3 className="App-Logo3"/>
        <Placa1 className= "App-Placa1"/>
        <Placa2 className= "App-Placa2"/>
        <Ifood className= "Ifood"/>
        <Delivery className= "delivery"/>
        <Placa3 className= "App-Placa3"/>
        <Card/>
      </header>
    </div>
  );
}

export default App;