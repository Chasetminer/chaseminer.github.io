import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';
import CV from './pages/CV';
import './index.css';
import Post from './pages/Post';

function App() {
  return (
    <Router basename="/">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}





export default App;
