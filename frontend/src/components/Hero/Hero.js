import styled from 'styled-components';

import herobg from '../../images/herobg.png';

const HeroSection = styled.section`
  position: relative;
  background-image: url(${herobg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 102vh;
  width: 100%;
  padding: 50px 0px;
`;

const HeroInfo = styled.div`
  position: absolute;
  z-index: 50;
  // background-color: green; 
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  'scrolling lead';
`;

const HeroLead = styled.p`
  // background-color: blue;
  grid-area: lead;
  display: flex;
  justify-content:flex-end;
  align-items: flex-end;
  margin-bottom: 6rem;
  margin-right: 100px;
  color: white;
  letter-spacing: 3px;
  font-weight: 200;
`;

const ScrollText = styled.p`
  // background-color:red;
  grid-area: scrolling;
  letter-spacing: 3px;
  font-weight: 200;
  font-family: var(--noto);
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 6rem;
  margin-right: -3%;
  animation: 
`;

export default function Hero(props){

  return(
    <HeroSection>
      <HeroInfo>
        <ScrollText>scroll</ScrollText>
        <HeroLead>LIFESTYLE. TRAVEL. TECHNICAL.</HeroLead>
      </HeroInfo>
    </HeroSection>
  )
}