import { HomePage } from './components/pages/HomePage/HomePage';
import { itemsData } from './components/pages/HomePage/MainContainer/ItemsData';
import './App.css';
import TradeContainer from './components/pages/HomePage/TradePage/TradeContainer/TradeConatainer';

function App() {
  return (
    <div className="app-container">
      {/* <HomePage items={itemsData} /> */}
      <TradeContainer/>
    </div>
  );
}

export default App;
