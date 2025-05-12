// import { HomePage } from './components/pages/HomePage/HomePage';
// import ItemPage from './components/pages/ItemPage/ItemPage';
import MyProfilePage from './components/pages/MyProfilePage/MyProfilePage';
import './App.css';
import './styles/responsive.css';


function App() {
  // const itemData = {
  //   imageUrl: 'https://yodfat.shop/wp-content/uploads/2020/06/100289_211_e.b197b0.webp',
  //   name: 'Stylish Chair',
  //   category: 'Furniture'
  // };

  // return (
  //   <div className="app-container">
  //     {/* <HomePage {...itemData} /> */}
  //     <ItemPage />
  //   </div>
  // );

  return (
    <div className="app-container">
      <MyProfilePage />
      {/* <ItemPage /> */}
    </div>
  );
}

export default App;
