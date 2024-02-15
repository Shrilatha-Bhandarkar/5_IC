
const validateAuthorID = (req, res, next) => {
    const authorID = parseInt(req.params.authorID);
    if (Number.isInteger(authorID)) {
      next(); 
    } else {
      res.status(400).json({ message: 'Invalid author ID' });
    }
  };
  
  module.exports = validateAuthorID;
  