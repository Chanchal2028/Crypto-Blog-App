import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import RecentPosts from './Components/RecentPosts/RecentPosts';
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <RecentPosts/>
    <Footer/>
    </div>
  );
}

export default App;
