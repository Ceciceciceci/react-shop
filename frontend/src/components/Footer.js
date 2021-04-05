import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Social = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const FooterLinks = styled.ul`

`;


export default function Footer(){
  return (
    <FooterWrapper>
        <FooterLinks>
          <li>CONTACT</li>
          <li>SHIPPING</li>
          <li>RETURNS</li>
        </FooterLinks>

        <Social>
          <p>SOCIALS</p>
          <li>TWITTER</li>
          <li>INSTAGRAM</li>
        </Social>
    </FooterWrapper>
  )
}