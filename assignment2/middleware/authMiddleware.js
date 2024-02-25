const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
       
        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = { authenticate };
