const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Handle user registration
router.post('/register', async (req, res) => {
    try {
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user instance with the provided data
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            email: req.body.email,
            country: req.body.country,
            gender: req.body.gender
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Respond with a success message or redirect to another page
        res.status(201).send('User registered successfully!');
    } catch (error) {
        // Handle any errors that occur during registration
        console.error('Error registering user:', error);
        res.status(500).send('An error occurred during user registration');
    }
});

module.exports = router;
