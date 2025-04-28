import { HomePage } from './components/pages/HomePage/HomePage';
import { itemsData } from './components/pages/HomePage/MainContainer/ItemsData';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <HomePage items={itemsData} />
    </div>
  );
}

export default App;
