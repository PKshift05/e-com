const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { createUser, findUserEmail } = require('../model/userModel')
require('dotenv').config()

exports.register = async (req, res) => {
    const {email, password} = req.body;
    const userExists = await findUserEmail(email);
    console.log(userExists)
    if (userExists) {
        return res.status(400).json({ message: 'Email đã được sử dụng' })
        
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser(email, hashedPassword);
    return res.status(201).json(newUser);

}


exports.login = async (req, res) => {
    const {email, password} = req.body;

    const user = await findUserEmail(email);
    if (!user) {
        return res.status(400).json({ message: 'Sai thông tin đăng nhập.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Sai thông tin đăng nhập.' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    return res.json({ token });
}