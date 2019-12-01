import React from 'react';
import '../App.css';

class Home extends React.Component {

  render() {
    return (
        <div className="App jumbotron vertical-center img-full" style={{marginBottom: '0px'}}>
          <div className="container">
            <h1 className="display-1" style={{color: 'black'}}>Welcome to Book Keeper</h1>
            <h4 style={{color: 'rgba(255, 255, 255, 0.61)'}}>Your personal online bookshelf</h4>
          </div>
        </div>
    );
  }
}
export default Home;