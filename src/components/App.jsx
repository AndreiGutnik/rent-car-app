import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import { Layout } from './Layout';
import NotFound from 'pages/NotFound/NotFound';
import { GlobalStyle } from './GlobalStyle';
import HomePage from 'pages/HomePage/HomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from 'redux/cars/cars-operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.CATALOG} element={<CatalogPage />} />
          <Route path={routes.FAVORITES} element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
