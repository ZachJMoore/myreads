
import React from "react"
import * as BooksAPI from './BooksAPI'

class book extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            shelf: this.props.book.shelf
        }
      }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                    {/* this.props.moveBook(this.props.book.id, this.state.shelf) */}
                        <select defaultValue={this.state.shelf} onChange={(event) => {
                            this.setState({shelf: event.target.value});
                            this.props.moveBook(this.props.book, event.target.value)
                        }}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </li>
        )
    }
}

export default book
