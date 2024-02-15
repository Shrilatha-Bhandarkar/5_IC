
const getAllBlogs = (req, res) => {
    res.json({ message: 'Get all blogs endpoint' });
  };
  
  const createBlog = (req, res) => {
    res.json({ message: 'Create blog endpoint' });
  };
  
  const getBlogByAuthorID = (req, res) => {
    res.json({ message: 'Get blog by author ID endpoint' });
  };
  
  module.exports = {
    getAllBlogs,
    createBlog,
    getBlogByAuthorID,
  };
  