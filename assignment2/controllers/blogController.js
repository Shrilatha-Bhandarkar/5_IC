const Blog = require('../models/blog');

const getAllBlogTitles = async (req, res) => {
    try {
        const blogTitles = await Blog.find({}, 'title');
        res.status(200).json(blogTitles);
    } catch (error) {
        console.error('Error getting blog titles:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getBlogContent = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error getting blog content:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getBlogReviews = async (req, res) => {
    try {
        const { id } = req.params;
        // Implement logic to get reviews for the blog
        res.status(200).json({ message: 'Not implemented yet' });
    } catch (error) {
        console.error('Error getting blog reviews:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getBlogByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const blogs = await Blog.find({ category });
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error getting blog by category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { getAllBlogTitles, getBlogContent, getBlogReviews, getBlogByCategory };
