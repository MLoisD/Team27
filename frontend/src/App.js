import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/InventoryHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBook from './book/AddBook';
import EditBook from './book/EditBook';
//import CustomerNav from './layout/CustomerNav';
import StoreFront from './pages/customerside/StoreFront';
import Aboutus from './pages/customerside/Aboutus';
import Contactus from './pages/customerside/ContactUs';
import CustomerHome from './pages/customerside/CustomerHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addBook" element={<AddBook />} />
          <Route exact path="/editBook/:bookID" element={<EditBook />} />

          <Route exact path="/mainsite" element={<CustomerHome />} />
          <Route exact path='/storefront' element={<StoreFront />} />
          <Route exact path='/about' element={<Aboutus />} />
          <Route exact path='/contactus' element={<Contactus />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
