const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const signIn = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email: email}).exec();
        if(user.password !== password) {
            res.status(400).json({
                message: 'Password Incorrect',
                status: 'BAD'
            });
            return;
        }
        console.log(user._id);
        let userInfo = {
            uid: user.id,
            fullName: user.fullName,
            email: user.email,
            
        }
        let token = jwt.sign(userInfo, process.env.JWT_SECRET);
        req.session.user = token;
        res.status(200).json({
            message:'Status OK',
            signin: true,
        })
    } catch (e) {
        res.status(400).json({
            message: 'User not exist',
            status: 'BAD'
        })
    }

}

exports.signIn = signIn;


