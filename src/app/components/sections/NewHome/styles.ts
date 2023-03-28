'use client'
import styled, { keyframes } from "styled-components";


const floatEth = keyframes`
  0% {
    transform: translateY(.5rem);
  }

  50% {
    transform: translateY(2rem);
  }

  100% {
    transform: translateY(.5rem);
  }
`

export const Container = styled.section`
  position: relative;

  .home__container {
    position: relative;
    padding: 7rem 0 2rem;
  }

  .home__title {
    font-size: var(--biggest-font-size);
    margin-bottom: .75rem;
  }

  .home__title span {
    background: linear-gradient(90deg,
        var(--second-color) 0%,
        var(--first-color) 100%);
    -webkit-background-clip: text;
    color: transparent;
  }

  .home__description {
    color: var(--text-color-light);
    margin-bottom: 1.5rem;
  }

  .home__button {
    display: inline-block;
    background: linear-gradient(95deg,
        var(--second-color) 0%,
        var(--first-color) 100%);
    padding: 1rem 2rem;
    border-radius: .25rem;
    color: var(--text-color);
    font-weight: var(--font-semi-bold);
    transition: box-shadow .4s;
  }

  .home__button:hover {
    box-shadow: 0 8px 48px hsla(203, 71%, 25%, .5);
  }

  .home__group {
    position: relative;
  }

  .home__images,
  .home__data {
    display: grid;
  }

  .home__img-eth {
    width: 100px;
    justify-self: center;
  }

  .home__img-eth img {
    filter: drop-shadow(0 4px 32px hsla(203, 71%, 60%, .5));
    animation: ${floatEth} 4s ease-in-out infinite;
  }

  .home__img-orbe {
    width: 280px;
    justify-self: center;
  }

  .home__data {
    position: absolute;
    top: -3rem;
    right: 1.5rem;
    row-gap: 1.25rem;
  }

  .home__data-number {
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
  }

  .home__data-subtitle {
    font-size: var(--smaller-font-size);
  }

  .home__footer,
  .home__footer-time {
    display: flex;
  }

  .home__footer {
    margin-top: 2.5rem;
    column-gap: 3.5rem;
  }

  .home__footer-title,
  .home__footer-subtitle {
    font-size: var(--smaller-font-size);
    display: block;
  }

  .home__footer-title {
    margin-bottom: .75rem;
  }

  .home__footer-number {
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    margin-bottom: .25rem;
  }

  .home__footer-time {
    column-gap: 1.25rem;
  }

  .home__footer-counter {
    text-align: center;
  }

  /* Shapes */
  .home__shape-small,
  .home__shape-big-1,
  .home__shape-big-2 {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
  }

  .home__shape-small {
    width: 150px;
    height: 150px;
    background-color: var(--first-color);
    top: -2.5rem;
    left: -1.5rem;
  }

  .home__shape-big-1,
  .home__shape-big-2 {
    width: 250px;
    height: 250px;
  }

  .home__shape-big-1 {
    background-color: var(--first-color);
    top: 16rem;
    right: -6.5rem;
  }

  .home__shape-big-2 {
    background-color: var(--second-color);
    left: -3.5rem;
    bottom: -4rem;
  }

  @media screen and (max-width: 340px) {
  .home__img-eth {
    width: 80px;
  }

  .home__img-orbe {
    width: 230px;
  }

  .home__data {
    right: .5rem;
  }

  .home__footer {
    flex-direction: column;
    row-gap: 2rem;
  }
}

/* For medium devices */
@media screen and (min-width: 767px) {
  .home__container {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    align-content: center;
    justify-content: center;
    gap: 2rem 4rem;
  }

  .home__group {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    align-self: center;
  }
}

/* For large devices */
@media screen and (min-width: 1024px) {
  .home__title {
    margin-bottom: 1rem;
  }

  .home__description {
    margin-bottom: 3rem;
  }

  .home__img-orbe {
    width: 500px;
  }

  .home__img-eth {
    width: 200px;
  }

  .home__data {
    top: 3rem;
    right: 0;
    row-gap: 2.5rem;
  }

  .home__shape-small,
  .home__shape-big-1,
  .home__shape-big-2 {
    filter: blur(132px);
  }

  .home__shape-small {
    width: 300px;
    height: 300px;
    top: -5rem;
    left: -2rem;
  }

  .home__shape-big-1,
  .home__shape-big-2 {
    width: 400px;
    height: 400px;
  }

  .home__shape-big-1 {
    top: 10rem;
    right: -3.5rem;
  }

  .home__shape-big-2 {
    left: 14rem;
    bottom: -10rem;
  }
}

  @media screen and (min-width: 1048px) {
    .container {
      margin-inline: auto;
    }
  }

  @media screen and (min-width: 1500px) {
    .home__shape-big-2 {
      left: 28rem;
    }
  }
`;