import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import PageDetail from './Components/PageDetail';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/pagedetails' element={<PageDetail/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
