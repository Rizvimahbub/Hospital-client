import React from 'react';
import Doctor2 from '../../assets/images/Doctor (2).jpg';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div  className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Doctor2} className="w-2/4 rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;