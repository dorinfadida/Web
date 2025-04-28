import { HomePage } from './components/pages/HomePage/HomePage';
import './App.css';

function App() {
  const items = [
    {
      imageUrl: 'https://yodfat.shop/wp-content/uploads/2020/06/100289_211_e.b197b0.webp',
      name: 'Stylish Chair',
      category: 'Furniture',
    },
    {
      imageUrl: 'https://via.placeholder.com/300x300.png?text=Modern+Lamp',
      name: 'Modern Lamp',
      category: 'Lighting',
    },
    {
      imageUrl: 'https://via.placeholder.com/300x300.png?text=Cozy+Sofa',
      name: 'Cozy Sofa',
      category: 'Furniture',
    },
    {
      imageUrl: 'https://via.placeholder.com/300x300.png?text=Elegant+Vase',
      name: 'Elegant Vase',
      category: 'Decor',
    }
  ];

  return (
    <div className="app-container">
      <HomePage items={items} />
    </div>
  );
}

export default App;
