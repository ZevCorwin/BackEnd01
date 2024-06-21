const PostService = require('../services/post.services');

class PostController {
    static async createPost(req, res) {
        try {
            const post = await PostService.createPost(req.body);
            res.status(201).json(post);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getPost(req, res) {
        try {
            const post = await PostService.getPostById(req.params.id);
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            res.status(200).json(post);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async updatePost(req, res) {
        try {
            const post = await PostService.updatePost(req.params.id, req.body);
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            res.status(200).json(post);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async deletePost(req, res) {
        try {
            const post = await PostService.deletePost(req.params.id);
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = PostController;
