const userServices = require('../services/user.services');

class UserController {
    create = async (req, res) => {
        const user = req.body;
        try {
            const userCreate = await userServices.create(user);
            res.send(userCreate);
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    getAllUsers = async (req, res) => {
        try {
            const users = await userServices.getAllUsers();
            res.send(users);
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    getUserById = async (req, res) => {
        const userId = req.params.id;
        try {
            const user = await userServices.getUserById(userId);
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.send(user);
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    updateUser = async (req, res) => {
        const userId = req.params.id;
        const updatedData = req.body;
        try {
            const updatedUser = await userServices.updateUser(userId, updatedData);
            if (!updatedUser) {
                return res.status(404).send('User not found');
            }
            res.send(updatedUser);
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    deleteUser = async (req, res) => {
        const userId = req.params.id;
        try {
            const deletedUser = await userServices.deleteUser(userId);
            if (!deletedUser) {
                return res.status(404).send('User not found');
            }
            res.send('User deleted successfully');
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
}

module.exports = new UserController();
