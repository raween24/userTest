// Keep your existing import but fix the path
const user = require('../models/User'); // Remove duplicate /models

exports.getAllUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'error', error: err.message });
    }
};

exports.getAllUserById = async (req, res) => {
    try {
        const foundUser = await user.findById(req.params.id);
        if (!foundUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json(foundUser);
    } catch (err) {
        res.status(500).json({ message: 'error', error: err.message });
    }
};

exports.AddUser = async (req, res) => {
    try {
        const body = req.body;
        
        if (!body.mdp) {
            return res.status(400).json({ message: 'mdp not found' });
        }
        
        const existingUser = await user.findOne({ mdp: body.mdp });
         
        if (!existingUser) {
            const newUser = new user(body);
            const savedUser = await newUser.save();
            return res.status(201).json({ message: 'success', user: savedUser });
            
        } else {
            // Fix: add the missing ID parameter
            const updatedUser = await user.findByIdAndUpdate(
                existingUser._id, // This was missing!
                body,
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.status(200).json({ message: 'update', user: updatedUser });
        }
    } catch (err) {
        console.error('AddUser Error:', err);
        res.status(500).json({ message: 'error', error: err.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const body = req.body;
        const newUser = new user(body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ message: 'error', error: err.message });
    }
};

// controllers/userController.js
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await user.findOneAndUpdate(
            { mdp: req.params.mdp },  // recherche par mdp
            req.body,                 // données à mettre à jour
            { new: true }             // retourne la version mise à jour
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: 'error', error: err.message });
    }
};


exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await user.findByIdAndDelete(req.params.mdp);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ message: 'error', error: err.message });
    }
};