import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import Details from './components/Details'
import Header from './components/Header'
import Footer from './components/Footer'
import Terms from "./components/t&c";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {

  render() {
    return(
    <div className="main-container">
      <Header />
    <body>
      <div className = "search">
          <Search/>
      </div>

      <div className = "card-container">
        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>
      </div>
    </body>
      <Router>
        <Route exact path="/Terms" component={Terms}/>
          <Footer />
        <Switch>
          <Route exact path='/Details' component={Details} />
        </Switch>
      </Router>
    </div>

    )
  }
}
export default App;