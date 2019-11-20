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
  }

  render() {
    return (
      <div>
        <h1>Hello from Create component</h1>
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Book Title</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Title}
          onChange={this.handleBookTitleChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Book Author</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Author}
          onChange={this.handleBookAuthorChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Book Year</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Year}
          onChange={this.handleBookYearChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Book Cover Url</label>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Cover}
          onChange={this.handleBookCoverChange}
          ></textarea>
        </div>
        <div className='form-group'>
          <label>Book Status</label>
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