import React from 'react';
import './App.css';
import './Style/mystyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import BookShelf from './components/bookshelf';
import AddBook from './components/addbook';
import EditBook from './components/editbook';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar variant="dark" className="my-bg-primary" >
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/bookshelf">BookShelf</Nav.Link>
              <Nav.Link href="/addbook">Add Book</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/bookshelf" component={BookShelf} />
            <Route path="/addbook" component={AddBook}/>
            <Route path="/editbook/:id" component={EditBook}/>
          </Switch>
          <div className="footer-bottom">
              Copyright © 2019, All Rights Reserved
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
