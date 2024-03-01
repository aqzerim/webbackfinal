const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User Schema
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    role: { type: String, enum: ['admin', 'regular'], default: 'regular' }, // You can extend this for more roles
    createdAt: { type: Date, default: Date.now }
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
