import './App.css';

import {HashRouter as Router, Switch, Route} from 'react-router-dom'
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
        <Route path='/' exact component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/reading-list' component={Readings}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
