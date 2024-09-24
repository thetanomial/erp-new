const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
exports.register = async (req, res) => {
    const { name, email, username, password, services } = req.body;

    try {
        // Generate a username from email if no username is provided
        const generatedUsername = username ? username : email.split('@')[0];

        const hashedPassword = await bcrypt.hash(password, 10);
        const userServices = Array.isArray(services) ? services : [];

        const newUser = new User({
            name,
            email,
            username: generatedUsername, // Use either provided or generated username
            password: hashedPassword,
            services: userServices,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Login user
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get current user
exports.getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Protected route example
exports.protectedRoute = (req, res) => {
    res.json({ message: 'You have access to this protected route', user: req.user });
};
