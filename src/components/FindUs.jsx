
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='space-y-3 my-10'>
            <h1>Find Us On</h1>
            <div className='flex flex-col *:w-full'>  
                <button className='btn rounded-none justify-start gap-5'><FaFacebook></FaFacebook> Facebook</button>
                <button className='btn rounded-none justify-start gap-5'><FaTwitter></FaTwitter> Twitter</button>
                <button className='btn rounded-none justify-start gap-5'><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;