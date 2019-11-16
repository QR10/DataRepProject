import React from 'react'
import Books from './books';
import axios from 'axios';

class BookShelf extends React.Component{

    state = {
        books: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({books: response.data.books})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <h1>Hello from Read Component</h1>
                <Books myBooks={this.state.books}></Books>
            </div>
        );
    }
}
export default BookShelf;