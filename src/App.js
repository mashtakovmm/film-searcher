import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Attribution from './pages/Attribution';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/attribution/' element={<Attribution />}></Route>
          <Route path='/about/' element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
