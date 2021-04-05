import { createGlobalStyle } from 'styled-components';
import footerbg from '../images/footerbg.png';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');


:root{
  --monty: 'Montserrat', sans-serif;
  --noto: 'Noto Serif', serif;

  --text: 16px;
  --heading: 36px;
}

/* RESET */
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
  font-family: var(--monty);
}
body {
  font-family: var(--monty);
}
ol, ul, li {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


h1, h2, h3, h4{
  font-family: var(--noto);
}
h1{
  font-size: 72px;
}
h2{
  font-size: 48px;
}
h3{
  font-size: 36px;
}
h4{
  font-size: 24px;
}

body{
  position: relative;
  background-color: ${({ theme }) => theme.pageBackground};
  color: ${({ theme }) => theme.text};
  overflow-x: hidden;
}

a{
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  letter-spacing: 4px;
  font-weight: 400;
  font-size: calc(var(--text) - 2px);
  transition: all 300ms ease-in-out;
}

a:hover{
  font-weight: 700;
}

a:active{
  font-weight: 700;
}

.btn{
  background-color: ${({theme}) => theme.buttonBg};
  color: ${({theme}) => theme.buttonText};
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  font-weight: 200;
  border: 5px solid ${({theme}) => theme.buttonBg};
  letter-spacing: 5px;
  padding: 1rem 4rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}
.btn:hover{
  font-weight: 600;
  background-color: #a9a9a9;
}

.explore{
  width: 100%;
  text-align: center;
  padding: 150px 0px;
  background-image: url(${footerbg});
  margin-top: -50px;
}

.explore h3{
  margin-bottom: 30px;
}

/* CARD */
.card{
  position: relative;
  width: 450px;
  background-color: ${({theme}) => theme.cardBg};
  color: ${({theme}) => theme.cardText};
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0, 0.25);
  justify-content: center;
  letter-spacing: 3px;
}
.card .pack-img{
  height: 300px;
  display: block;
  margin: 0 auto 25px;
}

.card a{
  font-weight: 600 !important;
}

.view-more{
  display: flex;
  align-items: center;
}
.view-more img{
  display: block;
  margin-right: 10px;
}

/* Ratings */
.star.yellow{
  color: #ffd527;
}

/* HERO */
.filter{
  filter: brightness(${({theme}) => theme.filter});
}

/* KEYFRAMES */
@keyframes woop{
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}


`;