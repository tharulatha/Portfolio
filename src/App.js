import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

    </>
)
}

export default App