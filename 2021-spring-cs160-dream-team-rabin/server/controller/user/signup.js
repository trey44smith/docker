const User = require('../../models/user');

const signup = async (req, res, next) => {
    const {
        email,
        password,
        fullName,
    } = req.body;

    const user = new User({
        email: email,
        password: password,
        fullName: fullName,
        createdAt: new Date().toISOString(),
    })
    try {
        const checkUser = await User.findOne({email: email}).exec();
        if(checkUser) {
            res.status(400).json({
                message: 'User already exist',
                status: "BAD"
            })
            return;
        }
        const newUser = await user.save();
        res.status(200).json({
            message: `Account created successfully`,
            status: "OK"
        })
    }catch (e) {
        res.status(400).json({
            message: e,
            status: "BAD"
        })
    }
}


exports.signup = signup;