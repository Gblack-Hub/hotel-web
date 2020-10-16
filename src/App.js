import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx' ;
import HomePage from './components/HomePage.jsx' ;
import SearchPane from './components/SearchPane.jsx' ;
import Services from './components/Services.jsx' ;

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <SearchPane />
      <Services />
      <span><i className="fa fa-user"></i></span>

      <div className="container">
        <div>
          <div>Explore popular hotels around the world</div>
          <div>
            <button className="btn btn-primary">See all</button>
            <button>See all</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">Paris</div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">Berlin</div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">St. Petersburg</div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">Uk</div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">Amsterdam</div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">Rio de Jenerio</div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">Budapest</div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">Dubai</div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">Nigeria</div>
        </div>
      </div>
      <div className="container">
      </div>

    </div>
  );
}

export default App;
