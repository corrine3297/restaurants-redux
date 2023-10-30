import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import ViewRestaurant from './Components/ViewRestaurant';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/view/:id' element={<ViewRestaurant/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
