
import './App.css';
//import Navbar from './components/Navbar';
import Programe from './components/Programe';
import Campus from './components/Campus';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Foter from './components/Foter';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Provider from './components/Context.js/Provider';
import Video from './components/Video';
function App() {
  return (
    <div className="App">
      <Provider>
      <Navbar/>
      
      <Home/>
      <Programe/>
      <Campus/>
      <Testimonial/>
      <Contact/>
      <Foter/>
      <Video/>
      </Provider>
      
    </div>
  );
}
            
export default App