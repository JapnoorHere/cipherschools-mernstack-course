const { Schema, model } = require('mongoose');
const Book = require("./Book");

const BookIssueSchema = new Schema({
    bookIsbn: {
        type: String,
        required: true,
        ref: "Book",
    },
    issuedTo: {
        type: Schema.ObjectId,
        required: true,
        ref: "User"
    },
    issuedBy: {
        type: Schema.ObjectId,
        required: true,
        ref: "User"
    },
    status: {
        type: String,
        default: "ISSUED",
        enum: ["ISSUED", "RETURNED"]

    }
},
    { timestamps: true }
);

BookIssueSchema.pre("save", async function (next) {
    const bookIssue = this;
    let value =0;
    if(bookIssue.isNew){
        value=1;
    } else{
        if(bookIssue.modifiedPaths().includes("status")){
         if(bookIssue.status === "RETURNED"){
             value = -1;
         } else{
             value = 1;
         }
    } 
}
    if(value){
        await Book.updateOne({isbn: bookIssue.bookIsbn},{$inc: {issuedQuantity: value}} )
    }
});

const BookIssue = model('BookIssue', BookIssueSchema);

module.exports = BookIssue;