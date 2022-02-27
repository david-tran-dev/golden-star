import DrinkList from '../DrinkList/DrinkList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <DrinkList />
      <Footer />
    </div>
  );
}

export default App;
