import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar'
import BookViewer from './BookViewer/BookViewer';

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

    render() {
        return (
            <div className = "container-fluid">
                <TitleBar />
                <BookViewer book = {this.books[this.state.bookNumber]} nextBook = {this.goToNextBook} previousBook = {this.goToPreviousBook}/>
            </div>
        )
    }
}

export default App;