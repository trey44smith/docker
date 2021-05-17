import './rentalcard.css';
import Button from "../../component/botton";
import { FaBed } from 'react-icons/fa';
import { AiFillDollarCircle } from 'react-icons/ai';


const RentalCard = ({
    id,
    title,
    desc,
    images,
    price,
    user,
    bedroom,
    availableDate,
    cood,
    address,
}) => {
    return (
        <div className="card rental-card" style={{width: '18rem'}}>
            <img src={images[0]} className="card-img-top" alt="..." style={{width: '18rem', height: '13rem', objectFit: 'cover'}}/>
            <div className="card-body">
                <h5 className="card-title card-title-custom">
                    <span>{title}</span>
                    <span className="price"><AiFillDollarCircle />{price}</span>
                </h5>
                <p className="card-text rental-desc">{desc}</p>
                <div className="rental-footer">
                    <Button color="secondary">View Detail</Button>
                    <div className="bedroom">
                      <FaBed /> {bedroom}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentalCard