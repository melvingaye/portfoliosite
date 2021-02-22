import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Readings from './pages/readings/Readings'
import Contact from './pages/contact/Contact'
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        {/* <Route path='/projects?code=:' component={Projects}/> */}
        <Route exact path='/projects' component={Projects}/>
        <Route path='/reading-list' component={Readings}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/*' component={Home}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
