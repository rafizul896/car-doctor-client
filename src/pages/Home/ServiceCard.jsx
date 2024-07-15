import PropTypes from 'prop-types';
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div className='p-3 rounded-[10px] border '>
            <div className='flex-1 md:h-[200px]'>
                <img className='rounded-lg h-full w-full object-cover' src={img} alt="" />
            </div>
            <h3 className='py-3 md:py-5 text-2xl font-bold'>{title}</h3>
            <div className='flex items-center justify-between'>
                <p className='flex items-center text-xl font-semibold text-[#FF3811]'>Price : <BsCurrencyDollar />{price}</p>
                <Link to={`/booking/${service._id}`}><HiOutlineArrowNarrowRight className='text-xl font-semibold text-[#FF3811]'/></Link>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;