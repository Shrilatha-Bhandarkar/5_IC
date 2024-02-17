
let blogs = [];

exports.getAllBlogs = (req, res) => {
    res.json(blogs);
};

exports.createBlog = (req, res) => {
    const { authorId, title, content } = req.body;
    if (!authorId || !title || !content) {
        res.status(400).json({ message: 'Author ID, title, and content are required' });
        return;
    }
    const newBlog = { id: blogs.length + 1, authorId, title, content };
    blogs.push(newBlog);
    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
};

exports.getBlogsByAuthorId = (req, res) => {
    const authorId = parseInt(req.params.authorId);
    if (isNaN(authorId)) {
        res.status(400).json({ message: 'Author ID must be an integer' });
        return;
    }
    const authorBlogs = blogs.filter(blog => blog.authorId === authorId);
    res.json(authorBlogs);
};
