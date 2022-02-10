import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Work+Sans:wght@300&display=swap');
  
  :root{
    --white: #fff;
    --grey: #262626;
    --black: #0c0c0c;
    --lightBlue: #1F44FF; 
    --mediumBlue: #1C20FF;
    --darkBlue: #1C11A4;
    
    --fontHuge: 4rem;
    --fontVeryBig: 3rem;
    --fontBig: 2rem;
    --fontMedium: 1.2rem;
    --fontSmall: 1rem;
    --fontExtraSmall: 0.8rem;
  }

  *{
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
    background: rgb(12,12,12);
  }

  h1,h2,h3,h4,h5,h6,p {
    color: var(--white);
  }
  h1,h2,h3,h4,h5 {
    font-family: 'Montserrat', sans-serif;
  }
  p {
    font-family: 'Work Sans', sans-serif;
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
  p{
    font-size: var(--fontMedium);
  }
`;
