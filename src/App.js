import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import BookShelf from './components/bookshelf';
import AddBook from './components/addbook';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/bookshelf">BookShelf</Nav.Link>
              <Nav.Link href="/addbook">Create</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/bookshelf" component={BookShelf} />
            <Route path="/addbook" component={AddBook}/>
           {/*} <Route path="/read" component={Read} />
            <Route path="/edit" component={Edit}/>*/}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
