
import { Link } from 'react-router-dom';
import userImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between my-5'>
            <div></div>
            <div className='flex items-center gap-3'>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Career</Link>
            </div>
            <div>
                <div className='flex items-center gap-3'>
                    <img src={userImg} alt="" />
                    <button className='btn btn-neutral rounded-none px-5'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;