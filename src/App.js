import { HomePage } from './components/pages/HomePage/HomePage';
import { itemsData } from './components/ItemCard/ItemsData';
import { BidsCenter } from './components/pages/BidsCenter/BidsCenter';
import ToolBar from './components/ToolBar/ToolBar';


function App() {
  return (
    <div className="app-container">
      <ToolBar />
      {/* <HomePage items={itemsData} /> */}
      <BidsCenter/>
    </div>
  );
}

export default App; 
