const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const getuser = async (req, res, next) => {
    if(!req.session.user) {
        res.status(500).json({
            isSignedIn: false,
            user: {},
            status: 'BAD',
        });
        return;
    }
    const sessionUser = req.session.user;
    const decoded = jwt.verify(sessionUser, process.env.JWT_SECRET);
    const uid = decoded.uid;
    const user = await User.findById(uid);
    
    const sendingData = {
        fullName: user.fullName,
        email: user.email,
        createdAt: user.createdAt,
    }

    res.status(200).json({
        isSignedIn: true,
        user: sendingData,
        status: 'OK'
    })
}

exports.getuser = getuser;