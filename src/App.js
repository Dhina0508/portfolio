import Navbar from './components/NavBar/navbar.js';
import Intro from './components/Intro/intro.jsx';
import Skills from './components/Skills/skills.jsx';
import Projects from './components/Projects/projects.jsx';
import Contact from './components/Contact/contact.jsx';
import Footer from './components/Footer/footer.jsx';
import Experience from './components/Experience/experience.jsx';

function App() {
  return (
  <div className='App'><Navbar/>
  <Intro/>
  <Experience/>
  <Skills/>
  <Projects/>
  <Contact/>
  <Footer/>
  </div>
  );
}

export default App; 
