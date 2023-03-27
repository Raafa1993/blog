'use client';
import { motion } from "framer-motion";
import Image from 'next/image';

import EthereumImg from '../../../../../public/ethereum-img.png';
import OrbeImg from '../../../../../public/orbe-img.png';

import { Container } from './styles';

export default function NewHome() {
  return (
    <Container>
      <div className="home__shape-small"></div>
      <div className="home__shape-big-1"></div>
      <div className="home__shape-big-2"></div>

      <div className="home__container container">
        <div className="home__info">
          <motion.h1 
            animate={{ opacity: 1, x: 0 }} 
            // transition={{ delay: 0.9 }}
            initial={{ opacity: 0, x: -120}} 
            className="home__title"
          >
            <span>Olá sou Rafael</span> <br />
            Frontend developer <br />
            UI & UX
          </motion.h1>
          <motion.p animate={{ opacity: 1, y: 0 }} className="home__description">Lorem ipsum dolor sit amet consectetur.</motion.p>
          <motion.a href="#" className="home__button">
            EXPLORE
          </motion.a>
        </div>

        <div className="home__group">
          <motion.div
            animate={{ opacity: 1, x: 0 }} 
            transition={{ type: 'spring', delay: 1 }}
            initial={{ opacity: 0, x: 120}} 
            className="home__images">
            <div className="home__img-eth">
              <Image src={EthereumImg} alt="home image" />
            </div>
            <div className="home__img-orbe">
              <Image src={OrbeImg} alt="home image" />
            </div>
          </motion.div>

          <div className="home__data">
            <motion.div 
              animate={{ x: 0, opacity: 1 }}  
              transition={{ delay: 1 }}
              initial={{ opacity: 0 }} 
            >
              <h2 className="home__data-number">26K+</h2>
              <span className="home__data-subtitle">Artwork</span>
            </motion.div>

            <motion.div 
              animate={{ x: 0, opacity: 1 }}  
              transition={{ delay: 1.1 }}
              initial={{ opacity: 0 }} 
            >
              <h2 className="home__data-number">18K</h2>
              <span className="home__data-subtitle">Auction</span>
            </motion.div>

            <motion.div 
              animate={{ x: 0, opacity: 1 }}  
              transition={{ delay: 1.2 }}
              initial={{ opacity: 0 }} 
            >
              <h2 className="home__data-number">8K</h2>
              <span className="home__data-subtitle">Artist</span>
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ opacity: 1, y: -20 }}  
          initial={{ opacity: 0, y: 0 }} 
          transition={{ delay: 1.2 }}
          className="home__footer"
        >
          <div>
            <span className="home__footer-title">Current bid</span>
            <h3 className="home__footer-number">2.00 ETH</h3>
            <span className="home__footer-subtitle">$8046.86</span>
          </div>

          <div>
            <span className="home__footer-title">Auction ending in</span>

            <div className="home__footer-time">
              <div className="home__footer-counter">
                <h3 className="home__footer-number">06</h3>
                <span className="home__footer-subtitle">hours</span>
              </div>

              <div className="home__footer-counter">
                <h3 className="home__footer-number">26</h3>
                <span className="home__footer-subtitle">minutes</span>
              </div>

              <div className="home__footer-counter">
                <h3 className="home__footer-number">50</h3>
                <span className="home__footer-subtitle">seconds</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
