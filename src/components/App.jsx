import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar'
import BookViewer from './BookViewer/BookViewer';
import BookCreator from './BookCreator/BookCreator';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            { title: "Ready Player One",author: "Ernest Cline"},
            { title: "All the Light We Cannot See", author: "Anthony Doerr"},
            { title: "The First and Last Freedom", author: "Jiddu Krishnamurit"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextBook = () => {
        let tempBookNum = this.state.bookNumber;
        tempBookNum++;
        if(tempBookNum === this.books.length) {
            tempBookNum = 0;
        }

        this.setState({
            bookNumber: tempBookNum
        })

    }

    goToPreviousBook = () => {
        let tempBookNum = this.state.bookNumber;
        tempBookNum--;
        if (tempBookNum < 0) {
            tempBookNum = this.books.length -1;
        }

        this.setState({
            bookNumber: tempBookNum
        })

    }

    createBook = (newBook) => {
        console.log('From the createBook on App Component', newBook)
        this.books.push(newBook);
        this.setState({
            bookNumber: this.books.length - 1
        })
    }

    render() {
        return (
            <div className = "container-fluid">
                <TitleBar />
                <BookViewer book = {this.books[this.state.bookNumber]} nextBook = {this.goToNextBook} previousBook = {this.goToPreviousBook}/>
                <BookCreator createNewBook = {this.createBook} />
            </div>
        )
    }
}

export default App;