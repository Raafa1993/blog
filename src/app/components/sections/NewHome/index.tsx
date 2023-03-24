'use client'
import React from 'react';
import Image from 'next/image';

import ShapeImg from "../../../../../public/shape-bg.png";
import EthereumImg from "../../../../../public/ethereum-img.png";
import OrbeImg from "../../../../../public/orbe-img.png";


export default function NewHome() {
  return (
    <main className="main">
      <section className="home">
        <div className="home__shape-small"></div>
        <div className="home__shape-big-1"></div>
        <div className="home__shape-big-2"></div>
        <Image
          src={ShapeImg}
          alt=""
          className="home__shape-bg"
        />

        <div className="home__container container">
          <div className="home__info">
            <h1 className="home__title">
              <span>Discover</span> <br />Collect, and <br />sell NFTs.
            </h1>
            <p className="home__description">
              Explore on the world best largest NFT marketplace.
            </p>
            <a href="#" className="home__button">
              EXPLORE
            </a>
          </div>

          <div className="home__group">
            <div className="home__images">
              <div className="home__img-eth">
                <Image src={EthereumImg} alt="home image" />
              </div>
              <div className="home__img-orbe">
                <Image src={OrbeImg} alt="home image" />
              </div>
            </div>

            <div className="home__data">
              <div>
                <h2 className="home__data-number">26K+</h2>
                <span className="home__data-subtitle">Artwork</span>
              </div>

              <div>
                <h2 className="home__data-number">18K</h2>
                <span className="home__data-subtitle">Auction</span>
              </div>

              <div>
                <h2 className="home__data-number">8K</h2>
                <span className="home__data-subtitle">Artist</span>
              </div>
            </div>
          </div>

          <div className="home__footer">
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
          </div>
        </div>
      </section>
    </main>
  );
}
