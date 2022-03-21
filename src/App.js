import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';





function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/footer" component={Footer} /> */}
        </Switch>
      </div>
      {/* <Filter /> */}
      <Footer />
    </Router>
  );
}

export default App;
