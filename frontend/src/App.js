
import {useState, useEffect} from 'react';
import Toggle from './components/Toggle';

// Styled-Components
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Navbar from './components/Navbar';
import Shop from './views/Shop';
import Product from './views/Product';
import ShoppingCart from './views/ShoppingCart';

function App() {

  //toggle between themes
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
      if(theme === 'light'){
          setTheme('dark');
      } else {
          setTheme('light');
      }
  }

  const [cartAmt, setCartAmt] = useState(0);

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={(theme === 'light') ? LightTheme : DarkTheme}>
          <GlobalStyles />
          <Navbar cartAmt={cartAmt} />
          <Switch>
            <Route exact path="/" render={(props) => (
              <Home {...props} theme={theme} setTheme={setTheme} toggleTheme={toggleTheme} isAuthed={true}/>
              )} />
            <Route path="/shop" render={(props) => (
                <Shop {...props} />
              )} />
            <Route path="/product/:id" component={Product}></Route>
            <Route path="/cart/:id?" component={ShoppingCart}></Route>
          </Switch>
        </ThemeProvider>
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
      </div>
    </Router>
  );
}

export default App;
