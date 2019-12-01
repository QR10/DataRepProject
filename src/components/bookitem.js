import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from '../../node_modules/sweetalert2';

class BookItem extends React.Component{
  constructor(){
    super();

    this.HandleDelete = this.HandleDelete.bind(this);
    this.DeleteBook = this.DeleteBook.bind(this);
  }
  
  HandleDelete(e){
    swal.fire({
      title: "Are you sure you want to delete this book?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: 'rgb(92,184,92)',
      cancelButtonColor: 'rgb(217,83,79)',
      confirmButtonText: "Yes, delete book!"
    }).then((result) => {
      if (result.value) {
        // Call delete book
        this.DeleteBook();
        // Display alert
        swal.fire(
          'Book Deleted!',
          'Your book has been successfully deleted.',
          'success'
        )
      }
    })
  }

  // Delete a book
  DeleteBook(e){
    axios.delete("http://localhost:4000/api/books/"+this.props.book._id)
    .then(()=>{
      this.props.ReloadDataMethod();
    })
    .catch();
  }

  render(){
    return(
      <div>  
        <Card bg="light" border="primary" style={{ width: '25rem', margin: '10px 20px' }}>
          <Badge variant="dark" style={{backgroundColor: this.props.book.status === "Currently Reading" ? "blue" 
                                                      : this.props.book.status === "Finished Reading" ? "green"
                                                      : "yellow"}}>{this.props.book.status}
          </Badge>
          <Card.Header>
            <h6>{this.props.book.title}</h6> 
            {this.props.book.author}
          </Card.Header>
          <Card.Img variant="top" src={this.props.book.cover} alt="Book Cover Unavailable"></Card.Img>
          <Card.Body style={{backgroundColor: 'rgb(228, 228, 228)'}}>
            <blockquote className="blockquote mb-0">
              <footer>
                Published in {this.props.book.year}
              </footer>
            </blockquote>
          </Card.Body>
          <Link to={"/editbook/"+this.props.book._id} className="btn btn-primary" style={{margin: '5px'}}>Edit</Link>
          <Button variant="danger" style={{margin: '5px'}} onClick={this.HandleDelete}>Delete</Button>
        </Card>
      </div>
    )
  }
}
export default BookItem;