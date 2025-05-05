import { HomePage } from './components/pages/HomePage/HomePage';
import { itemsData } from './components/ItemCard/ItemsData';
import './App.css';
import ToolBar from './components/ToolBar/ToolBar';

function App() {
  return (
    <div className="app-container">
      <ToolBar />
      {/* <HomePage items={itemsData} /> */}
    </div>
  );
}

export default App; // ✅ this is what you need!
