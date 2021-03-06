import React, { Component } from 'react';
import logo from './assets/images/icon.png';
import './App.css';
import './php/login/index.php';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/dashboard" component={Dashboard}/>
    </div>
  </Router>
);

const Home = () => (
     <div className="App">
        <header>
          <div>
            <img src={logo} alt="Hello" style={{paddingTop: '10%'}}/>
          </div>
        </header>
        <div className="container">
           <div className="login">
            <div>
              <label htmlFor="email" style={{color: '#fff'}}>Email</label>
              <br/>
              <input type="email" name="email" className="input" placeholder="Email" required/>
            </div>
            <div>
              <label htmlFor="password" style={{color: '#fff'}}>Contraseña</label>
              <br/>
              <input type="password" name="password" className="input" placeholder="Contraseña" required/>
            </div>
            <div>
            <button type="submit" className="btn btn-purple" style={{width: '60%', height: '3em',margin: '20%'}}>
              <Link to="/dashboard" style={{color: '#fff', textDecoration: 'none'}}>Iniciar Sesión</Link>
            </button>
            </div>
          </div>
        </div>
        <footer className="footer" style={{paddingBottom: '8%'}}>
          <div className="footer-container">
            <span>encuentralotodo, C.A</span>
            <span>All Rights Reserved</span>
            <span>2018</span>
          </div>
        </footer>
      </div>
);

const Dashboard = () => (
  <div className="App">
    <aside className="sidebar"></aside>
    <section className="main-view"></section>
  </div>
);

/*class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <div style={{marginTop: '10%'}}>
            <img src={logo} alt="Hello"/>
          </div>
        </header>
        <div className="container">
          <form onSubmit={this.sendIt} method="post" className="login">
            <div>
              <label htmlFor="email" style={{color: '#fff'}}>Email</label>
              <br />
              <input type="text" name="email" className="input" placeholder="Email"/>
            </div>
            <div>
              <label htmlFor="password" style={{color: '#fff'}}>Contraseña</label>
              <br />
              <input type="password" name="password" className="input" placeholder="Contraseña"/>
            </div>
            <div>
              <button type="submit" className="btn btn-purple" style={{width: '60%', height: '3em',margin: '20%'}}>Iniciar Sesión</button>
            </div>
          </form>
        </div>
        <footer class="footer">
          <div class="footer-container">
            <span>encuentralotodo, C.A</span>
            <span>All Rights Reserved</span>
            <span>2018</span>
          </div>
        </footer>
      </div>
    );
  }
}*/

export default App;
