import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
  :root{
    --white: #fff;
    --grey: #262626;
    --darkGrey: #1c1c1c;
    --black: #0c0c0c;
    --lightBlue: #45FDF5; 
    --mediumBlue: #1C20FF;
    --darkBlue: #1C11A4;
    
    --fontHuge: 4rem;
    --fontVeryBig: 3rem;
    --fontBig: 2rem;
    --fontMedium: 1.2rem;
    --fontSmall: 1rem;
    --fontExtraSmall: 0.8rem;
  }

  .navbarAnchor {
    @media screen and (max-width: 600px){
      display: block;
      position: relative;
      top: -5rem;
      visibility: hidden;
    }
  }

  *{
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
    background: rgb(12,12,12);
    color: var(--white);
  }
  body::-webkit-scrollbar {
    width: 0.5rem;
  }
  body::-webkit-scrollbar-track {
    background: #1a1a1f;
  }
  body::-webkit-scrollbar-thumb {
    background: var(--lightBlue);
    border-radius: 5px;
  }

  main {
    padding-left: 5rem;
    @media only screen and (max-width: 600px) {
      padding-bottom: 5rem;
      padding-left: 0;
    }
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', sans-serif;
  }
  p {
    font-family: 'Work Sans', sans-serif;
    font-size: var(--fontMedium);
  }
  h1 {
    font-size: var(--fontHuge);
  }
  h2 {
    font-size: var(--fontVeryBig);
  }
  h3,h4,h5,h6 {
    font-size: var(--fontBig);
  }
`;
