import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import FruitPage from './pages/FruitPage';
import VegetablePage from './pages/VegetablePage';
import MeatSeafoodPage from './pages/MeatSeafoodPage';
import DairyCheeseEggPage from './pages/DairyCheeseEggPage';
import SpecialOfferPage from './pages/SpecialOfferPage';
import SearchResultPage from './pages/SearchResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/:slug' element={<DetailPage />} />
          <Route path="/fruits" element={<FruitPage />} />
          <Route path="/vegetables" element={<VegetablePage />} />
          <Route path="/meat-seafood" element={<MeatSeafoodPage />} />
          <Route path="/dairy" element={<DairyCheeseEggPage />} />
          <Route path="/special-offer" element={<SpecialOfferPage />} />
          {/* <Route path="/dairy" element={<Page />} /> */}

          <Route path="/search" element={<SearchResultPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
