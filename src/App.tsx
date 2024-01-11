import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Article from './components/article';
import List from './components/list';
import Logo from './assets/logo.svg';
import Article_icon from './assets/article_icon.svg';
import Table_icon from './assets/table_icon.svg'

const linkStyle = {
  textDecoration: "none",
  color: '#435374',
  
};

function App() {

  return (
    <div className='app'>
        <Router>
          <nav>
            <Link to='/'><img  className="logo" src={Logo} alt="logo" /></Link>
            <div className='links'>
              <Link to="/article" className='link' style={linkStyle}>ARTIKKEL<img src={Article_icon} alt='article_icon' /></Link>
              <Link to="/list" className='link' style={linkStyle}>TABEL<img src={Table_icon} alt='table_icon'/></Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<Article />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;