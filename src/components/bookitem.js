import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BookItem extends React.Component{

  constructor(){
    super();

    this.DeleteBook = this.DeleteBook.bind(this);
  }

  // Delete a book
  DeleteBook(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/books/"+this.props.book._id)
    .then()
    .catch();
  }

    render(){
      return(
        <div>
            {/* <h4>{this.props.movie.Title}</h4>
            <p>{this.props.movie.Year}</p>
            <img src={this.props.movie.Poster}></img> */}


            <Card  border="primary" style={{ width: '28rem' }}>
              <Card.Header>{this.props.book.title}</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                <img src={this.props.book.cover}></img>
                  <footer>
                  {this.props.book.year}
                  </footer>
                </blockquote>
              </Card.Body>
              <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
              <Link to={"/edit/"+this.props.book._id} className="btn btn-primary">Edit</Link>
            </Card>
        </div>
      )
    }
}
export default BookItem;