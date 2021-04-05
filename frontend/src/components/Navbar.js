import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.header`
  margin-top: 50px;
  padding: 25px 100px;
  height: 55px;
  width: 100%;
  position: fixed;
  z-index: 999;
`;

const Nav = styled.nav`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-areas:
  'title links cart';
`;

const Title = styled.h1`
  grid-area: title;
  display: flex;
  justify-content:flex-start;
  line-height: 180px;
  font-size: 220px;
  writing-mode: vertical-rl;
  transform:rotate(180deg);
  display: inline-block;
  letter-spacing: 2rem;
  margin-top: -2rem;
  transition: all 250ms cubic-bezier(.02,.61,.85,.84);
`;

const NavbarLinks = styled.ul`
  grid-area: links;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  > * + *{
    margin-left: 50px;
  }
`;

const NavbarCart = styled.a`
  grid-area: cart;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

export default function Navbar(props){

    // For mainly navigation logo title
    const [offsetY, setOffsetY] = useState(0);
    // Update the Y offset
    const handleScroll = () => setOffsetY(window.pageYOffset);
    // Initialize scroll function on window function 
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      console.log(offsetY);
      // remove event listener after the Y is reached.
      return () => window.removeEventListener("scroll", handleScroll);
    }, [offsetY]);

    console.log('window: ', window.location.pathname);

    const {cartAmt} = props;
    let titleSet = (offsetY > 75 || window.location.pathname !== '/') ?  
    <Title style={{ transform: `rotate(270deg)`, 
                    fontSize: `36px`, 
                    lineHeight: `0px`,
                    display: `block`,
                    letterSpacing: `1rem`,
                    marginTop: `-5rem`,
                    marginLeft: `100px`
                  }}>PACK</Title>
   :
    <Title>PACK</Title>
   

   return (
    <Wrapper>
      <Nav>
        <Link to="/">{titleSet}</Link>
        <NavbarLinks>
          <li><a href='/shop'>SHOP</a></li>
          <li><a href='/story'>STORY</a></li>
          <li><a href='/contact'>WHERE</a></li>
        </NavbarLinks>
        <NavbarCart href="/cart">
          BAGS({cartAmt})
        </NavbarCart>
      </Nav>
    </Wrapper>
   )
}