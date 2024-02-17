
exports.validateCredentials = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
      res.status(400).json({ message: 'Username and password are required' });
      return;
  }
  next();
};

exports.validateAuthorIdParam = (req, res, next) => {
  const authorId = parseInt(req.params.authorId);
  if (isNaN(authorId)) {
      res.status(400).json({ message: 'Author ID must be an integer' });
      return;
  }
  next();
};
