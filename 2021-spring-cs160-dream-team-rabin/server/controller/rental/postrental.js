const jwt = require('jsonwebtoken');
const Postrental = require ('../../models/rental')

const postrental = async(req, res, next) =>{
    if(!req.session.user) {
        res.status(500).json({
            isSignedIn: false,
            status: 'BAD',
        });
        return;
    }
    const sessionUser = req.session.user;
    const decoded = jwt.verify(sessionUser, process.env.JWT_SECRET);
    const uid = decoded.uid;
    // checkError(req.body, res, next);
    const createdAt = new Date().toISOString();
    const user = {
        fullName: decoded.fullName,
        email: decoded.email,
    }
    const {
        title,
        desc,
        price, 
        street, 
        city, 
        state, 
        zip, 
        cood, 
        availableDate, 
        bedroom, 
        images,
    } = req.body;

    if(!title && !desc && !price ) {
        res.status(400).json({
            message: 'You posted 5 Rental space already. Please signup for business account',
            status: "BAD"
        })
        return;
    }

    const rental = new Postrental({
        uid: uid, 
        title: title,
        desc: desc,
        price: price, 
        street: street, 
        city: city, 
        state: state, 
        zip: zip, 
        cood: cood, 
        availableDate: availableDate, 
        bedroom: bedroom, 
        user: user, 
        images: images,
        createdAt: createdAt
    })
    try {
        const newRoom = await rental.save();
        const newData= {
            ...req.body,
            id: newRoom.id,
            images: [
                'images/room1.jpg',
                'images/room1.jpg',
                'images/room1.jpg',
                'images/room1.jpg',
            ]
        }
        return res.status(200).json({
            data: newData,
            message: 'Room is uploaded',
            status: 'OK'
        })
    }
    
    catch(e){
        res.status(400).json({
            status: 'BAD',
            message: 'Something went wrong'
        })
    }

}

exports.postrental = postrental;

