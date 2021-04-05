import { func, string } from 'prop-types';

import styled from 'styled-components';
//--

const ToggleContainer = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: grey;
  width: auto;
  padding: 5px;
  margin: 0 auto;
  border: 5px solid grey;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  transition: all 0.3s linear;

  .square {
    width: 30px;
    height: 30px;
    transition: all 0.3s linear;
  }
  .square.one{
    background-color:#252525;
    transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
  }
  .square.two{
    background-color: #FFFFFF;
    transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
            <div className="square one"></div>
            <div className="square two"></div>
        </ToggleContainer>

    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle;