import { HomePage } from './components/pages/HomePage/HomePage';
import './App.css';

function App() {
  const itemData = {
    imageUrl: 'https://yodfat.shop/wp-content/uploads/2020/06/100289_211_e.b197b0.webp',
    name: 'Stylish Chair',
    category: 'Furniture'
  };

  return (
    <div className="app-container">
      <HomePage {...itemData} />
    </div>
  );
}

export default App;
