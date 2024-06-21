const Post = require('../models/post.model');

class PostService {
    static async createPost(data) {
        try {
            const post = new Post(data);
            return await post.save();
        } catch (error) {
            throw error;
        }
    }

    static async getPostById(postId) {
        try {
            return await Post.findById(postId).populate('author', 'name email'); // Giả sử bạn muốn populate thông tin author
        } catch (error) {
            throw error;
        }
    }

    static async updatePost(postId, updatedData) {
        try {
            return await Post.findByIdAndUpdate(postId, updatedData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    static async deletePost(postId) {
        try {
            return await Post.findByIdAndDelete(postId);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PostService;
