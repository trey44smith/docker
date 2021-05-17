
const signout = async (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            res.status(500).json({status: 'BAD', message: 'something went wrong'})
            return;
        }
        res.status(200).json({
            message:'Status OK',
            signin: false,
        })
    })
}

exports.signout = signout;