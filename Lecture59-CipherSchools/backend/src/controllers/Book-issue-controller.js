const BookIssue = require('../models/Book-Issue');

const addBookIssue = async (req, res) => {
    try {
        const { bookIsbn, issuedTo, status } = req.body; // Destructure to explicitly check for bookIsbn
        
        // Check if bookIsbn is provided
        if (!bookIsbn) {
            return res.status(400).send({ message: "bookIsbn is required" });
        }

        const bookIssue = new BookIssue({ 
            bookIsbn, 
            issuedTo, 
            status,
            issuedBy: req.user._id 
        });
        
        await bookIssue.save();
        return res.status(201).send({ message: "saved" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: err.message });
    }
};

const getBookIssuedByStudent = async (req, res) => {
    const user = req.user;
    let query;
    if (user.type === "LIBRARIAN") {
        query = { issuedTo: req.query.studentId };

    } else {
        query = { issuedTo: req.user._id };
    }
    if (req.query.status) {
        query = { ...match, status: req.query.status };
    }
    // const {studentId} = req.query;
    const bookIssueList = await BookIssue.find(match);
    console.info(`Found: ${bookIssueList.length} book issues for the student 
        ID: ${req.query.studentId} for the given filters.`)

    return res.status(200).send(bookIssueList);

}

const getBookIssueList =  async (req, res) => {
const bookIssueList = await BookIssue.find({ status: req.query.status});
    console.info(`Found: ${bookIssueList.length} book issues.`)

    return res.status(200).send(bookIssueList);

}


module.exports = { addBookIssue, getBookIssuedByStudent, getBookIssueList }