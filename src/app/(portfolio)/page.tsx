
import Header from '../components/sections/Header';
import Nav from '../components/sections/Nav';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <div className='container'>
     <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
