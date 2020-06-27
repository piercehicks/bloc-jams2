import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
/* import './App.css'; */
import './styles/newLanding.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import Logo from './landing_page/bloc_jams_logo.png';




class App extends Component {
  render() {
    return (
      <div className="App">
      <header>

      <nav className="navbar"> 
             <span  class="logo" to="/">
                 <Link to="/"><img src={Logo} alt="Bloc Jams logo" /></Link>
             </span>
            
             <div className="links-container">
                 
                 <li className="navbar-link"><Link className="navbar-link" to='/library'>Library</Link></li>
             </div>
         </nav>

    
      
        </header>
        <main>
         <Route exact path="/" component={Landing} />
         <Route path="/library" component={Library} />
         <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
