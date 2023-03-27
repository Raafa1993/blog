import Image from 'next/image';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import Footer from '../components/sections/Footer';
import Nav from '../components/sections/Nav';
import NewHome from '../components/sections/NewHome';
import Portfolio from '../components/sections/Portfolio';

import ShapeImg from '../../../public/shape-bg.png';

export default function Home() {
  return (
    <>
      <main>
        <Image src={ShapeImg} alt="" className="home__shape-bg" />

        {/* <Header /> */}
        <NewHome />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />

      </main>
        <Footer />
      {/* <div style={{ position: 'relative', display: 'flex' }}>
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div> */}
    </>
  );
}
