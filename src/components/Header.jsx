import moment from 'moment/moment';
import logo from '../assets/logo.png'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='text-center my-10 space-y-3'>
            <div className='text-center flex justify-center'>
                <img className='text-center' src={logo} alt="" />
            </div>
            <p className='font-bold '>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <div className='flex items-center gap-2 w-11/12 mx-auto bg-slate-200 p-2'>
                <span className='bg-red-400 py-1 px-3 text-white '>Latest</span>
                <Marquee pauseOnHover={true} speed={30}>
                    <Link to='latest'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, alias.</Link>
                    <Link to='latest'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, alias.</Link>
                    <Link to='latest'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, alias.</Link>
                </Marquee>
                

            </div>
        </div>
    );
};

export default Header;