
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    
   <About></About>
   <Projects></Projects>
   <Skills></Skills>
   <Contact></Contact>
   <SocialLinks></SocialLinks>
    </>
  )
}

export default App
