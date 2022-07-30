import PrimaryButton from '../Shared/PrimaryButton';
import Doctor from '../../Images/Doctor.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={Doctor} className="w-2/4 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold leading-tight">We care your health and checkup with best Technology</h1>
                    <p className="py-6">New York Diagnostic Centre Ltd. has a collection of the most advanced medical technologies. All the machineries which are being used here are designed with rigorous safety standards to aid in the diagnosis or treatment of medical problems.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;