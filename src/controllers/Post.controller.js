const { PostService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { status, data } = await PostService
    .createPost(title, content, categoryIds, req.payload.id);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const { status, data } = await PostService.getAllPosts();
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, data } = await PostService.getById(Number(id));

    if (!data) {
      return res.status(mapStatusHTTP(status)).json({ message: 'Post does not exist' });
    }
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getById,
};