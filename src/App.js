import './App.css';
import {BrowserRouter,Link,Redirect,Route,Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Movies from './components/Movies';
import Button from '@material-ui/core/Button';
import { AppBar, Box, Container, Toolbar } from '@material-ui/core';

function App() {


  return (
    <div className="App">

      <section className="App">
        <h1>React routing Example</h1>
        <BrowserRouter>
          
          <AppBar position="fixed">
            <Container>
              <Toolbar>
                <Box>
                  <Button color="inherit" variant="outlined"><Link  style={{ color: 'white' }} to="/"> Home</Link></Button>
                   <Button color="inherit" variant="outlined"><Link style={{color:'white'}}to="/movies"> Movies</Link></Button>
                </Box>
              </Toolbar>
          </Container>

          </AppBar>
{/*           
          <nav>
            <ul>
              <li> <Link to="/">HomePage</Link></li>
              <li> <Link to="/movies">Movies</Link></li>
            </ul>
          </nav> */}
    
       
          <Switch>
          <Route  exact path='/' component={HomePage} />
            <Route  path='/movies/:filmsId' component={AboutPage} />
            <Route   path='/movies' component={Movies} />
            <Redirect exact to={{ pathname: '/'}}/>
          </Switch>
          
         </BrowserRouter>
      </section>
      
    </div>
  );
}

export default App;
