
const rental = async (req, res, next) => {
    res.status(200).json({
        rentals: list,
        status: 'OK'
    })
}

exports.rental = rental;

const list = [
    {
        id: 1001,
        uid: 'slkdjlksjds',
        title: 'Cozy home',
        desc: 'Have a stress free stay in ozone-disinfected clean home! We use bleach to clean surfaces, wash with ozone and bleach. Definitely safer than a hotel! Parking on site. You will stay in isolated front house of a duplex. Easy to find, direct access.',
        price: 1000,
        street: '123 San Jose Ave',
        city: 'San Jose',
        state: 'CA',
        zip: '12343',
        cood: {
            lat: 1234344.23,
            lon: 12343674.55,
        },
        availableDate: 1618190351502,
        bedroom: 4,
        user: {
            fullName: "Full Name",
            email: 'fullname@gmail.com',
            phone: '98089898988'
        },
        images: [
            'images/room1.jpg',
            'images/room1.jpg',
            'images/room1.jpg',
            'images/room1.jpg',
        ],
    },
    {
        id: 1002,
        uid: 'slkdjlksjds',
        title: 'Beautiful Home',
        desc: 'Have a stress free stay in ozone-disinfected clean home! We use bleach to clean surfaces, wash with ozone and bleach. Definitely safer than a hotel! Parking on site. You will stay in isolated front house of a duplex. Easy to find, direct access.',
        price: 2000,
        street: '123 San Jose Ave',
        city: 'San Jose',
        state: 'CA',
        zip: '12343',
        cood: {
            lat: 12343433.23,
            lon: 12343454.55,
        },
        availableDate: 1618190351502,
        bedroom: 2,
        user: {
            fullName: "Full Name",
            email: 'fullname@gmail.com',
            phone: '98089898988'
        },
        images: [
            'images/room2.jpg',
            'images/room2.jpg',
            'images/room2.jpg',
            'images/room2.jpg',
        ],
    },
    {
        id: 1003,
        uid: 'slkdjlksjds',
        title: 'Ocean View Home',
        desc: 'Have a stress free stay in ozone-disinfected clean home! We use bleach to clean surfaces, wash with ozone and bleach. Definitely safer than a hotel! Parking on site. You will stay in isolated front house of a duplex. Easy to find, direct access.',
        price: 2000,
        street: '123 San Jose Ave',
        city: 'San Jose',
        state: 'CA',
        zip: '12343',
        cood: {
            lat: 12343433.23,
            lon: 12343454.55,
        },
        availableDate: 1618190351502,
        bedroom: 2,
        user: {
            fullName: "Full Name",
            email: 'fullname@gmail.com',
            phone: '98089898988'
        },
        images: [
            'images/room3.jpg',
            'images/room3.jpg',
            'images/room3.jpg',
            'images/room3.jpg',
        ],
    },
    {
        id: 1004,
        uid: 'slkdjlksjds',
        title: 'Ocean View Home',
        desc: 'Have a stress free stay in ozone-disinfected clean home! We use bleach to clean surfaces, wash with ozone and bleach. Definitely safer than a hotel! Parking on site. You will stay in isolated front house of a duplex. Easy to find, direct access.',
        price: 2000,
        street: '123 San Jose Ave',
        city: 'San Jose',
        state: 'CA',
        zip: '12343',
        cood: {
            lat: 12343433.23,
            lon: 12343454.55,
        },
        availableDate: 1618190351502,
        bedroom: 2,
        user: {
            fullName: "Full Name",
            email: 'fullname@gmail.com',
            phone: '98089898988'
        },
        images: [
            'images/room4.jpg',
            'images/room4.jpg',
            'images/room4.jpg',
            'images/room4.jpg',
        ],
    },
]