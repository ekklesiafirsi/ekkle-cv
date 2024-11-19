
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Skill from './components/Skill';
import About from './components/About';

function App() {
  return (
    <div className="App">
    <head> 
    <title>Personal Portfolio</title>
   </head>
  <div>
  <Header/>
  <main className="main">  
    <Home/>
    <About/>
    <Skill/>
    <Contact/>
  </main>
    <Footer/>
  </div>
  </div>
  );
};

export default App;
