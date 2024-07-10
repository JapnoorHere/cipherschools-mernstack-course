import React, { useEffect, useState } from 'react';
import Select from "react-select";
import { useNavigate, useLocation } from "react-router-dom";
import { getAllStudents } from '../api/user-Api';
import { getAllBooks } from '../api/Book-api';
import { addNewBookIssue } from '../api/book-issue-api';

function BookIssueForm() {

    const [BookIssue, setBookIssue] = useState({
        issuedTo: "", bookIsbn: ""
    });

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const [BookOptions, setBookOptions] = useState([]);
    const [StudentOptions, setStudentOptions] = useState([]);

    useEffect(() => {
        getAllStudents().then((studentList) => {
            setStudentOptions(studentList.map((student) => {
                return {
                    value: student._id,
                    label: `${student.firstName} ${student.lastName}`
                }
            }));
        });
        getAllBooks().then((bookList) => {
            setBookOptions(
                bookList.map((book) => {
                    return {
                        value: book.isbn,
                        label: `${book.title} by ${book.author}`
                    }
                })
            );
        });

        // If navigating from BookScreen, set the selected book
        if (location?.state?.isbn) {
            setBookIssue(prevState => ({ ...prevState, bookIsbn: location.state.isbn }));
        }
    }, [location]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!BookIssue.issuedTo || !BookIssue.bookIsbn) {
            alert("Both student and book must be selected.");
            return;
        }
        await addNewBookIssue(BookIssue);
        navigate("/");
    };

    return (
        <section className="app-section">
            <h1>Issue a new Book</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Student</label>
                    <Select
                        options={StudentOptions}
                        isSearchable={true}
                        onChange={({ value }) => {
                            setBookIssue({ ...BookIssue, issuedTo: value });
                        }}
                    />
                </div>
                <div className="field">
                    <label>Book</label>
                    <Select
                        options={BookOptions}
                        isSearchable={true}
                        onChange={({ value }) => {
                            setBookIssue({ ...BookIssue, bookIsbn: value });
                        }}
                        value={BookOptions.find(option => option.value === BookIssue.bookIsbn) || null}
                    />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </section>
    );
}

export default BookIssueForm;
