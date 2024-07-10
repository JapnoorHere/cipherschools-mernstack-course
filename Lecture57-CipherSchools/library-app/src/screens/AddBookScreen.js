import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addBook } from '../api/Book-api';
const AddBookScreen = () => {

    const [bookToBeAdded, setBookToBeAdded] = useState({
        isbn:"",title:"", author:"", totalQuantity:"", issuedQuantity:""
        , price:""
    })
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(bookToBeAdded);
        await addBook(bookToBeAdded);
        navigate("/");
    }

    

    const handleInputChange=(e)=>{
        setBookToBeAdded({...bookToBeAdded, [e.target.name]: e.target.value})
    }

    return (
        <section className="app-section">

            <h1>Add a new Book</h1>
            <span>Do not have an account? SignUp <Link to={"/signup"}>here</Link> </span>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>ISBN</label>
                    <input type="text" name="isbn" placeholder="isbn" value={bookToBeAdded.isbn}
                        onChange={handleInputChange} required={true}
                    />
                </div>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="title"
                        value={bookToBeAdded.title} onChange={handleInputChange} required={true} />
                </div>
                <div className="field">
                    <label>Author</label>
                    <input type="text" name="author" placeholder="author"
                        value={bookToBeAdded.author} onChange={handleInputChange} required={true} />
                </div>
                <div className="field">
                    <label>Issued Quantity</label>
                    <input type="text" name="issuedQuantity" placeholder="issuedQuantity"
                        value={bookToBeAdded.issuedQuantity} onChange={handleInputChange}
                        min={0} required={true} />
                </div>
                <div className="field">
                    <label>Total Quantity</label>
                    <input type="text" name="totalQuantity" placeholder="totalQuantity"
                        value={bookToBeAdded.totalQuantity} min={1} onChange={handleInputChange} required={true} />
                </div>
                <div className="field">
                    <label>Price</label>
                    <input type="text" name="price" placeholder="price"
                        value={bookToBeAdded.price} min={1} onChange={handleInputChange} required={true} />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default AddBookScreen;