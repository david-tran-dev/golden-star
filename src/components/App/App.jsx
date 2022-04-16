import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DrinkList from '../DrinkList/DrinkList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MealList from '../MealList/MealList';
import MenuList from '../Menu/MenuList';
import Loading from '../Loading/Loading';
import requestData from '../data';
import './App.scss';

function App() {
  const [menuList, setMenuList] = useState({});
  const [mealList, setMealList] = useState({});
  const [drinksList, setDrinksList] = useState({});
  const [loading, setLoading] = useState('true');

  const navigate = useNavigate();

  useEffect(async () => {
    setLoading(true);
    const response = await requestData();
    console.log('response:', response);
    if (response.status === 200) {
      setMenuList(response.data.data[0].attributes);
      setMealList(response.data.data[1].attributes);
      setDrinksList(response.data.data[2].attributes);
    } else {
      console.log(response.data.error.message);
      navigate('/error');
    }
    setLoading(false);
  }, []);

  return (
    <div className="App">
      {!loading
      && (
        <>
          <Header />
          <MenuList menuList={menuList} />
          <MealList mealList={mealList} />
          <DrinkList drinksList={drinksList} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default React.memo(App);
