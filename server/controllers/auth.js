const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrpyt = require('bcrypt');

exports.signup = async (req, res) => {
    const data = req.body
    let token = jwt.sign({ username: req.body.username }, process.env.secretkey);
    const hashpass = bcrpyt.hashSync(req.body.password, 10);
    data.token = token;
    data.password = hashpass;
    try {
        const newuser = await User.create(data);
        res.status(200).json({ newuser, message: 'user created' })
        console.log(newuser);
    } catch (error) {
        res.status(400).json({ message: 'error while creating user', error });
    }
}

exports.login = async (req, res) => {
    try {
        const doc = await User.findOne({ username: req.body.username });
        if (!doc) {
            return res.json({ status: false, message: "username incorrect" })
        }
        const comparepass = bcrpyt.compareSync(req.body.password, doc.password);
        if (comparepass) {
            let token = jwt.sign({ username: req.body.username }, process.env.secretkey, { expiresIn: "1h"});
            doc.token = token;
            doc.save();
            return res.status(200).json({ message: 'login successfully', tkn: doc.token });
        }
        else { 
            return res.json({status: false, message: "incorrect pass"});
        }
    } catch (error) {
        res.json({status: 404, message: 'expired token', error })
    }
}