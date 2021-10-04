import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { AnimatePresence } from 'framer-motion'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <AnimatePresence>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
