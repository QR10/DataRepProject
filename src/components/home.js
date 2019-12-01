import React from 'react';
import '../App.css';

class Home extends React.Component {

  render() {
    return (
        <div className="App">
          <header className="text-center py-5 mb-4" style={{backgroundColor: 'rgb(175, 230, 255)'}}>
            <div className="container">
                <h1 className="font-weight-light text-white">Welcome</h1>
            </div>
          </header>
        </div>
    );
  }
}
export default Home;