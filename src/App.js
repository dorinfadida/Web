import { HomePage } from './components/pages/HomePage/HomePage';
import { itemsData } from './components/ItemCard/ItemsData';
import { BidsCenter } from './components/pages/BidsCenter/BidsCenter';

function App() {
  return (
    <div className="app-container">
      {/* <HomePage items={itemsData} /> */}
      <BidsCenter/>
    </div>
  );
}

export default App;
