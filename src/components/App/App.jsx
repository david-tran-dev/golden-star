import React, { useEffect, useState } from 'react';
import {
  useNavigate, useLocation, Routes, Route,
} from 'react-router-dom';

import Loading from '../Loading/Loading';
import requestData from '../data';
import './App.scss';
import Menu from '../Pages/Menu/Menu';
import Error from '../Error/Error';

function App() {
  const [menuList, setMenuList] = useState({});
  const [mealList, setMealList] = useState({});
  const [drinksList, setDrinksList] = useState({});
  const [loading, setLoading] = useState('true');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(async () => {
    setLoading(true);
    const response = await requestData();
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
      {loading ? <Loading />
        : (
          <Routes location={location}>
            <Route
              path="/"
              element={(
                <Menu
                  menuList={menuList}
                  mealList={mealList}
                  drinksList={drinksList}
                />
)}
            />
            <Route path="/error" element={<Error />} />

          </Routes>
        )}
    </div>
  );
}

export default React.memo(App);
