import React from 'react'
import { useState, useEffect } from 'react'
import { getAllBooks } from '../api/Book-api';
import { getLocalStorageUser } from '../utils/AuthUtil';

const numberFormatter = new Intl.NumberFormat('en-IN',{
  currency: "INR",
  style: "currency",
});

const formatCurrency =  (currencyValue)=> numberFormatter.format(currencyValue);

function BookScreen() {
    const [booklist, setBooklist] = useState([]);
    const [userType, setuserType] = useState("STUDENT")
// useeffect fn can never be async

const fetchBooks =  async()=>{
 setuserType(getLocalStorageUser().type)
    const books = await getAllBooks();
    setBooklist(books);
};
    useEffect( ()=>{
        fetchBooks().then()
        .catch((err)=>{
          console.error(err);
      })
    },[])

  return (
    <section className='app-section'>
        <h1>List of All the Books in the library</h1>
        <table className="ui single line table">
  <thead>
    <tr>
      <th>ISBN</th>
      <th>Title</th>
      <th>Author</th>
      <th>Price</th>
      <th>Total Quantity</th>
      <th>Issued Quantity</th>
      {userType === 'LIBRARIAN' && <th>Actions</th> }
    </tr>
  </thead>
  <tbody>
    {booklist.map((book)=>{
      return (
        <tr>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{formatCurrency(book.price)}</td>
        <td>{book.totalQuantity}</td>
        <td>{book.issuedQuantity}</td>
        { userType === 'LIBRARIAN' &&
        <td>
          <button className='ui green button' 
          disabled={book.issuedQuantity >= book.totalQuantity}>Issue Book</button>
        </td>
    }
      </tr>
      )
    })}
  </tbody>
</table>
    </section>
  )
}

export default BookScreen
