const Blog = require('../models/blog');

const searchBlogTitles = async (req, res) => {
    try {
        const { q } = req.query;
        const regex = new RegExp(q, 'i');
        const blogTitles = await Blog.find({ title: regex }, 'title');
        res.status(200).json(blogTitles);
    } catch (error) {
        console.error('Error searching blog titles:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { searchBlogTitles };
