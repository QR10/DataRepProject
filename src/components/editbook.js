import React from 'react';
import '../App.css';
import axios from 'axios';
import swal from '../../node_modules/sweetalert2';

class EditBook extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {Title:'',
                      Author:'',
                      Year:'',
                      Cover:'',
                      Status:'',
                      _id:''};
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBookTitleChange = this.handleBookTitleChange.bind(this);
        this.handleBookAuthorChange = this.handleBookAuthorChange.bind(this);
        this.handleBookYearChange = this.handleBookYearChange.bind(this);
        this.handleBookCoverChange = this.handleBookCoverChange.bind(this);
        this.handleBookStatusChange = this.handleBookStatusChange.bind(this);
    }
    
    componentDidMount(){
        axios.get('http://localhost:4000/api/books/'+this.props.match.params.id)
        .then((response)=>{
            this.setState({
            _id:response.data._id,
            Title:response.data.title,
            Author:response.data.author,
            Year:response.data.year,
            Cover:response.data.cover,
            Status:response.data.status
            })
        })
        .catch();
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
        e.preventDefault();

        const newBook = {
            title: this.state.Title,
            author: this.state.Author,
            year: this.state.Year,
            cover: this.state.Cover,
            status: this.state.Status
        };

        axios.put('http://localhost:4000/api/books/'+this.state._id, newBook)
        .then()
        .catch();

        this.setState({Title:'',
                Author:'',
                Year:'',
                Cover:'',
                Status:''
        });

        // SweetAlert2 success alerts
        swal.fire({
            title: "Book Updated!",
            text: "Book details successfully updated!",
            icon: "success",
        }).then((result)=> {
            // Send user back to bookshelf
            this.props.history.push('/bookshelf');
        });
    }
    render() {
        return (
            <div className="App">
                <header className="text-center py-5 mb-4" style={{backgroundColor: 'rgb(175, 230, 255)'}}>
                    <div className="container">
                        <h1 className="font-weight-light text-white">Edit book</h1>
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
                        value="Update Book Details">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditBook;