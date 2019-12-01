import React from 'react';
import axios from 'axios';

class AddBook extends React.Component {
  constructor(props){
    super(props);

    this.state = {Title:'',
                  Author:'',
                  Year:'',
                  Cover:'',
                  Status:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBookTitleChange = this.handleBookTitleChange.bind(this);
    this.handleBookAuthorChange = this.handleBookAuthorChange.bind(this);
    this.handleBookYearChange = this.handleBookYearChange.bind(this);
    this.handleBookCoverChange = this.handleBookCoverChange.bind(this);
    this.handleBookStatusChange = this.handleBookStatusChange.bind(this);
  }
  
  handleBookTitleChange(e){
    this.setState({Title: e.target.value});
  }
  handleBookAuthorChange(e){
    this.setState({Author: e.target.value});
  }
  handleBookYearChange(e){
    this.setState({Year: e.target.value});
  }
  handleBookCoverChange(e){
    this.setState({Cover: e.target.value});
  }
  handleBookStatusChange(e){
    this.setState({Status: e.target.value});
  }

  handleSubmit(e){
    alert(this.state.Title+ "      " + this.state.Author + "      "  + this.state.Year 
    +"       "+ this.state.Cover + "      " + this.state.Status);
    e.preventDefault();
                const newBook = {
                  title: this.state.Title,
                  author: this.state.Author,
                  year: this.state.Year,
                  cover: this.state.Cover,
                  status: this.state.Status
                };
          axios.post('http://localhost:4000/api/books',newBook) 
          .then()
          .catch();

          this.setState({Title:'',
                    Author:'',
                    Year:'',
                    Cover:'',
                    Status:''
            });
            // Redirect to bookshelf
            this.props.history.push('/bookshelf')
  }

  render() {
    return (
      <div>
        <header className="text-center py-5 mb-4" style={{backgroundColor: 'rgb(175, 230, 255)'}}>
            <div className="container">
                <h1 className="font-weight-light text-white">Add new book</h1>
            </div>
        </header>
        <form onSubmit={this.handleSubmit} className="border border-primary" style={{margin: '50px', textAlign: 'left', padding: "40px"}}>
        <div className='form-group'>
          <label>Book Title:</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Title}
          onChange={this.handleBookTitleChange}
          required></input>
        </div>
        <div className='form-group'>
          <label>Author:</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Author}
          onChange={this.handleBookAuthorChange}
          required></input>
        </div>
        <div className='form-group'>
          <label>Publish Year:</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Year}
          onChange={this.handleBookYearChange}
          required></input>
        </div>
        <div className='form-group'>
          <label>Cover Url:</label>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Cover}
          onChange={this.handleBookCoverChange}
          ></textarea>
        </div>
        <div className='form-group'>
          <label>Status:</label>
          <select
          type='text'
          className='form-control'
          value={this.state.Status}
          onChange={this.handleBookStatusChange}>
            <option>Finished Reading</option>    
            <option>Currently Reading</option>    
            <option>Want to Read</option>    
          </select>
        </div>
        <div>
          <input
          className="btn btn-primary"
          type="submit"
          value="Add Book">
          </input>
        </div>
        </form>
      </div>
    );
  }
}

export default AddBook;