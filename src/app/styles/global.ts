'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  :root {
    --white: #FFF;
    --text: #EFF5F5;
    --subTitle: #9599A7;
    --subTitleLight: #BDBBBF;

    --textButton: #2F2C53;

    --content: #141B26;
    --background: #0B0F1F;
    --primary: #A29CED;

    --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #494D4B;

    --green-500: #04D361;

    --purple-300: #9F75FF;
    --purple-400: #9164FA; 
    --purple-500: #8257E5;
    --purple-800: #6F48C9;

    --container-width-lg: 75%;
    --container-width-md: 86%;
    --container-width-ms: 90%;

    --linearTitle: linear-gradient(90deg, #ED7B84 0%, #9055FF 100%);

    --header-height: 3.5rem;


    --mb-0-5: .5rem;
    --mb-0-75: .75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;

/*========== Colors ==========*/
/*Color mode HSL(hue, saturation, lightness)*/
--first-color: hsl(203, 71%, 60%);
--second-color: hsl(277, 56%, 68%);
--text-color: hsl(203, 8%, 98%);
--text-color-light: hsl(203, 8%, 80%);
--body-color: hsl(259, 20%, 18%);

/*========== Font and typography ==========*/
/*.5rem = 8px | 1rem = 16px ...*/
--body-font: 'Oxanium', cursive;
--biggest-font-size: 2.25rem;
--h2-font-size: 1.25rem;
--normal-font-size: .938rem;
--smaller-font-size: .75rem;

/*========== Font weight ==========*/
--font-semi-bold: 600;

/*========== z index ==========*/
--z-fixed: 100;
}

/* Responsive typography */

@media screen and (min-width: 1024px) {
:root {
  --biggest-font-size: 4rem;
  --h2-font-size: 1.5rem;
  --normal-font-size: 1rem;
  --smaller-font-size: .813rem;
}
}

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;

    background: var(--background);
  }

  body, input, textarea, button {
    font: 500 1rem Poppins, sans-serif;
    color: var(--gray-500);
  }

  img, picture, video, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    font-family: Poppins, sans-serif;
    color: var(--gray-800);
    font-weight: 600;
  }

  #root, #__next {
    isolation: isolate;
  }

  h1 {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  main {
    overflow: hidden;
    position: relative;

    .home__shape-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: soft-light;
      opacity: .1;
    }
  }

  .container {
    max-width: 1024px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);

    @media screen and (max-width: 1024px) {
      width: var(--container-width-md);
    }

    @media screen and (max-width: 600px) {
      width: var(--container-width-ms);
    }

    @media screen and (min-width: 1024px){
      margin-left: auto;
      margin-right: auto;
    }

    @media screen and (max-width: 320px){
      margin-left: var(--mb-1);
      margin-right: var(--mb-1);
   }
  }

  .grid {
    display: grid;
  }

  .section {
    padding: 6.5rem 0 1rem;
    
  }

  @media (max-width: 1080px) {
    html {
        font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
        font-size: 87.5%; // 14px
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      width: var(--container-width-md);
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      width: var(--container-width-ms);
    }
  }

  .gradient-01 {
    background-image: linear-gradient(
      270deg,
      hsl(295deg 76% 51%) 0%,
      hsl(284deg 70% 73%) 26%,
      hsl(257deg 70% 86%) 39%,
      hsl(202deg 92% 90%) 50%,
      hsl(215deg 77% 81%) 61%,
      hsl(221deg 73% 70%) 74%,
      hsl(220deg 76% 51%) 100%
    );
    filter: blur(125px);
  }

  .hero-gradient {
    background: linear-gradient(
      97.86deg,
      #a509ff 0%,
      #34acc7 53.65%,
      #a134c7 100%
    );
  }

  .gradient-02 {
    position: absolute;
    width: 200px;
    height: 438px;
    top: 0px;
    right: 0px;

    background: #7aebfb;
    filter: blur(190px);
  }

  .glassmorphism {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .gradient-03 {
    position: absolute;
    width: 404px;
    height: 800px;
    left: 20%;
    top: 5%;

    background: rgba(149, 66, 232, 0.35);
    filter: blur(175px);
    transform: rotate(-114.2deg);
  }

  .gradient-04 {
    position: absolute;
    width: 304px;
    height: 100vh;
    left: 30%;
    top: 10%;

    background: rgba(45, 72, 152, 0.75);
    filter: blur(200px);
    transform: rotate(-53.13deg);
  }

  .gradient-07 {
    position: absolute;
    width: 280px;
    height: 100vh;
    right: 0%;
    top: 30%;

    background: rgba(45, 72, 152, 0.75);
    filter: blur(200px);
    transform: rotate(-285deg);
    z-index: -1;
  }

  .gradient-05 {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .gradient-06 {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    background-color: var(--first-color);
    top: 16rem;
    right: -6.5rem;
  }

  .feedback-gradient {
    position: absolute;
    width: 200px;
    height: 316px;
    left: 0px;
    top: 0px;

    background: #8d39a3;
    filter: blur(175px);
  }

  .footer-gradient {
    position: absolute;
    width: 500px;
    height: 100px;
    left: 37%;
    bottom: 0;

    background: #65c4fa;
    filter: blur(150px);
  }
`;
