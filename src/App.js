import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>        
        <Route path='/home' element={<Home></Home>}></Route>        
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>        
        <Route path='/blog' element={<Blog></Blog>}></Route>        
        <Route path='/about' element={<About></About>}></Route>        
        <Route path='/login' element={<Login></Login>}></Route>        
        <Route path='/register' element={<Register></Register>}></Route>        
        <Route path='*' element={<NotFound></NotFound>}></Route>        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
