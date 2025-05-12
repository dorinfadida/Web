import { HomePage } from './components/pages/HomePage/HomePage';
import { itemsData } from './components/ItemCard/ItemsData';
import './App.css';
import  TradeContainer  from './components/pages/TradePage/TradeContainer/TradeContainer';
function App() {
  return (
    <div className="app-container">
      <HomePage items={itemsData} />
        <TradeContainer/>
    </div>
  );
}

export default App;
