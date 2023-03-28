import './App.css';
import ProductsAll from './layout/pages/productsall/ProductsAll';
import Footer from './layout/components/footer/Footer';
import HomeMain from './layout/pages/home/HomeMain';
import Navbar from './layout/components/navbar/Navbar';
import Signup from './layout/pages/signup/Signup';
import Login from './layout/pages/login/Login';
import ContactUs from './layout/pages/contact us/ContactUs';
import AboutUs from './layout/pages/about us/AboutUs';
import InventoryHome from './layout/pages/adminside/admincrud/InventoryHome';
import AddBook from './layout/pages/adminside/admincrud/AddBook';
import EditBook from './layout/pages/adminside/admincrud/EditBook';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/products" element={<ProductsAll />} />
          <Route exact path="/" element={<HomeMain />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/book/updateBook/:bookID" element={<EditBook />} />
          <Route exact path="/book/addBook" element={<AddBook />} />
          <Route exact path="/admin" element={<InventoryHome />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
