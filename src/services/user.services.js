const userModel = require('../models/user.model');

class UserServices {
    static async create(data) {
        try {
            const user = new userModel(data);
            return await user.save();
        } catch (error) {
            throw error;
        }
    }

    static async getAllUsers() {
        try {
            return await userModel.find();
        } catch (error) {
            throw error;
        }
    }

    static async getUserById(userId) {
        try {
            return await userModel.findById(userId);
        } catch (error) {
            throw error;
        }
    }

    static async updateUser(userId, updatedData) {
        try {
            return await userModel.findByIdAndUpdate(userId, updatedData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    static async deleteUser(userId) {
        try {
            return await userModel.findByIdAndDelete(userId);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;
