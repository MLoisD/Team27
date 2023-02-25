
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/InventoryHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBook from './book/AddBook';
import EditBook from './book/EditBook';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/addBook" element={<AddBook/>}/>
          <Route exact path="/editBook/:bookID" element={<EditBook/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
