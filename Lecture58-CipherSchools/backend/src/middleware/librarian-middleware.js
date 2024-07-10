const librarianMiddleware = async(req, res, next) => {
    if(req.user.type!== 'LIBRARIAN') {
        return res.status(403).send({message: "You are not authorized to perform this operation"});

    }

    next();
}
module.exports ={ librarianMiddleware};