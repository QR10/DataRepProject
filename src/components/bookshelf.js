import React from 'react'
import Books from './books';
import axios from 'axios';
import CardGroup from 'react-bootstrap/CardGroup';
import swal from '../../node_modules/sweetalert2';

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
            swal.fire({
                icon: 'error',
                title: 'Error connecting to the server',
                text: "Check server status or open your browser's console for more information",
            })
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

                {this.state.books.length === 0 && (
                    <div className="jumbotron vertical-center">
                        <div className="container">
                            <h1 className="display-1">Your bookshelf is empty!</h1>
                            <h4 style={{color: 'rgba(0, 0, 0, 0.50)'}}>Add some books!</h4>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
export default BookShelf;