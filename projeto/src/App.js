import './App.css';
import Home from './Componentes/Home';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Cart } from './cart.svg';
import { ReactComponent as Logo2 } from './logo2.svg';
import { ReactComponent as Logo3 } from './logo3.svg';
import { ReactComponent as Logo4 } from './logo4.svg';
import { ReactComponent as Logo5 } from './logo5.svg';
import { ReactComponent as Ifood } from './ifood.svg';
import { ReactComponent as Delivery } from './delivery.svg';
import { ReactComponent as Logo7 } from './logo7.svg';
   

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <Logo className="App-Logo"/>
        <Cart className="App-Cart"/>
        <Logo2 className="App-Logo2"/>
        <Logo3 className="App-Logo3"/>
       <div className='App-Logo4'>
       <Logo4/>
       <Logo5/>
       <Logo7
       />
       </div>
      <Ifood className="ifood"/>
      <Delivery className="Delivery"/>
      </header>
    </div>
  );
}

export default App;