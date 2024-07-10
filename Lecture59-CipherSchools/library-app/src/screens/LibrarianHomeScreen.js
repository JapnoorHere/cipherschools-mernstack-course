import {Link} from 'react-router-dom';
const LibrarianHomeScreen = () => {
    return (
        <>
            <h1>Welcome Librarian</h1>
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header"><Link to={"/add-book"} >Add New Book</Link></div>
                    
                        <div className="description">
                            Adds a new book in the library.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="header"><Link to={"/books"} >List of  Books</Link></div>
                    
                        <div className="description">
                            See the list of all the books in the library.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="header"><Link to={"/book-issue"} >Issue a Book</Link></div>
                    
                        <div className="description">
                            To issue a book to a student.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="header"><Link to={"/book-issue-list"} >Show Issued Books</Link></div>
                    
                        <div className="description">
                            To fetch the list of book issued.
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default LibrarianHomeScreen;