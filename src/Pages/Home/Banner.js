import PrimaryButton from '../Shared/PrimaryButton';
import Doctor from '../../Images/Doctor.jpg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    AOS.init();
    return (
        <div className="hero min-h-screen">
            <div  className="hero-content flex-col lg:flex-row-reverse ">
                <img data-aos='zoom-in-left' data-aos-duration="3000" src={Doctor} className="w-2/4 rounded-lg shadow-2xl" />
                <div data-aos='zoom-in-right' data-aos-duration="3000">
                    <h1 className="text-5xl font-bold leading-tight">We care your health and checkup with best Technology</h1>
                    <p className="py-6">New York Diagnostic Centre Ltd. has a collection of the most advanced medical technologies. All the machineries which are being used here are designed with rigorous safety standards to aid in the diagnosis or treatment of medical problems.</p>
                    <PrimaryButton><Link to='/appointment'>Get Started</Link></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;