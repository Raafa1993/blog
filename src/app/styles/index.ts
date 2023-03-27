'use client';
import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  @media (min-width: 1536px) {
    width: 1280px;
  }

  width: 100%;
  @media (min-width: 1024px) {
    width: 80%;
  }

  padding: 12px 6px;
  @media (min-width: 640px) {
    padding: 8px;
  }
  @media (min-width: 768px) {
    padding: 16px;
  }
  padding-top: 12px;
  @media (min-width: 640px) {
    padding-top: 8px;
  }
  @media (min-width: 768px) {
    padding-top: 16px;
  }
  padding-bottom: 12px;
  @media (min-width: 640px) {
    padding-bottom: 8px;
  }
  @media (min-width: 768px) {
    padding-bottom: 16px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerStart = styled(Container)`
  justify-content: start;
  align-items: start;
`;

const ContainerEnd = styled(Container)`
  justify-content: end;
`;

const Nav = styled.nav`
  padding-top: 98px;
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 44px;
  line-height: 64.4px;
  text-transform: uppercase;
  color: white;
  @media (min-width: 640px) {
    font-size: 60px;
    line-height: 74.4px;
  }
  @media (min-width: 768px) {
    font-size: 100px;
    line-height: 114.4px;
  }
  @media (min-width: 1024px) {
    font-size: 144px;
    line-height: 158.4px;
  }
`;

const DText = styled.div`
  width: 60px;
  height: 38px;
  border: 9px solid white;
  border-right: 18px solid white;
  border-radius: 50px 0 0 50px;
  @media (min-width: 640px) {
    width: 80px;
    height: 48px;
    border-width: 18px;
  }
  @media (min-width: 768px) {
    width: 212px;
    height: 108px;
    border-width: 18px;
  }
  margin-left: 6px;
  @media (min-width: 640px) {
    margin-left: 2px;
  }
`;

const Ethereium = styled.div`
.main {
  overflow: hidden;
  /* For the animations */
}

.home {
  position: relative;
}

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
  animation: float-eth 4s ease-in-out infinite;
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

.home__shape-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: soft-light;
  opacity: .3;
}

/* Animation ethereum */
@keyframes float-eth {
  0% {
    transform: translateY(.5rem);
  }

  50% {
    transform: translateY(2rem);
  }

  100% {
    transform: translateY(.5rem);
  }
}

/*=============== BREAKPOINTS ===============*/
/* For small devices */
@media screen and (max-width: 340px) {
  .container {
    margin-inline: 1rem;
  }

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
  .nav {
    height: calc(var(--header-height) + 1.5rem);
  }

  .nav__toggle,
  .nav__close,
  .nav__img {
    display: none;
  }

  .nav__list {
    flex-direction: row;
    column-gap: 4rem;
  }

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

export { Container, ContainerStart, ContainerEnd, Nav, Heading, DText, Ethereium };