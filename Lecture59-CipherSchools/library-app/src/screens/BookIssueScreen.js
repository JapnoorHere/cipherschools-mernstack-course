import React, { useEffect, useState } from 'react'
import { getBookIssueList } from '../api/book-issue-api';

const dateFormatter = new Intl.DateTimeFormat('en-IN',{
    year:"numeric",
    month: "long",
    day: "numeric",
})

const formatDate = (date) => dateFormatter.format(date);
function BookIssueScreen() {
    const [BookIssueList, setBookIssueList] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("ISSUED");
    useEffect(()=>{
        getBookIssueList(selectedStatus).then((list)=>{
            setBookIssueList(list);
        })
    },[selectedStatus])
    return (
        <section className='app-section'>
            <h1>List of All the Books in the library</h1>
            <table className="ui single line table">
      <thead>
        <tr>
          <th>ISBN</th>
          <th>Student ID</th>
          <th>Issue Date</th>
        </tr>
      </thead>
      <tbody>
        {BookIssueList.map((bookIssue)=>{
          return (
            <tr>
            <td>{bookIssue.bookIsbn}</td>
            <td>{bookIssue.issuedTo}</td>
            <td>{formatDate(new Date(bookIssue.createdAt))}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
        </section>
      )
}

export default BookIssueScreen
