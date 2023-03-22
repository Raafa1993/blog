import Header from '../components/sections/Header';
import Nav from '../components/sections/Nav';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import WhatsNew from '../components/sections/WhatsNew/WhatsNew';
import GetStarted from '../components/sections/GetStarted/GetStarted';

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />

        <Footer />
      </div>
      {/* <div style={{ position: 'relative', display: 'flex' }}>
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div> */}
    </>
  );
}
