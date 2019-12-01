import React from 'react'
import Books from './books';
import axios from 'axios';
import CardGroup from 'react-bootstrap/CardGroup';

class BookShelf extends React.Component{
    constructor(){
        super();
        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
    }

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

    ReloadDataMethod() {
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({books: response.data.books})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        // Reload data before displaying
        this.ReloadDataMethod();
        return(
            <div>
                <header className="text-center py-5 mb-4" style={{backgroundColor: 'rgb(175, 230, 255)'}}>
                    <div className="container">
                        <h1 className="font-weight-light text-white">Your Books</h1>
                    </div>
                </header>
                <CardGroup>
                    <Books myBooks={this.state.books} ReloadDataMethod={this.ReloadDataMethod}></Books>
                </CardGroup>
            </div>
        );
    }
}
export default BookShelf;