let authors = []; 

exports.login = (req, res) => {
    const { username, password } = req.body;
    const author = authors.find(author => author.username === username && author.password === password);
    if (author) {
        res.json({ message: 'Login successful', author });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

exports.register = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ message: 'Username and password are required' });
        return;
    }
    const newAuthor = { id: authors.length + 1, username, password };
    authors.push(newAuthor);
    res.status(201).json({ message: 'Author registered successfully', author: newAuthor });
};
