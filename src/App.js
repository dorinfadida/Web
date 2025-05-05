import { HomePage } from './components/pages/HomePage/HomePage';
import { itemsData } from './components/ItemCard/ItemsData';
import './App.css';


function App() {
  return (
    <div className="app-container">
      <HomePage items={itemsData} />
    </div>
  );
}

export default App;
