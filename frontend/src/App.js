import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages and components
import Home from './pages/home';
import Posts from './pages/posts';
import PostAdd from './pages/post_add';
import Search from './pages/search';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/post_add' element={<PostAdd />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
