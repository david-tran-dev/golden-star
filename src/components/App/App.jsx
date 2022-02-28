import DrinkList from '../DrinkList/DrinkList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MealList from '../MealList/MealList';
import MenuList from '../Menu/MenuList';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <MenuList />
      <MealList />
      <DrinkList />
      <Footer />
    </div>
  );
}

export default App;
