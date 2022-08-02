import React from 'react';
import Doctors from '../../Images/Doctors.jpg';
import P1 from '../../Images/P1.jpg';
import P2 from '../../Images/P2.jpg';
import P3 from '../../Images/P3.jpg';
import Footer from '../Shared/Footer';

const About = () => {
    return (
        <div className='bg-white'>
            <h1 className='text-6xl font-semibold mt-7 text-center '>About Us</h1>
            <div class="hero min-h-screen bg-white">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Doctors} class="w-2/4 rounded-lg shadow-2xl" />
                    <div>
                        <p class="py-6 w-11/12 font-semibold text-xl text-justify">We Respect Everyone, Every Second Of The Day. Excellence: Providing An Outstanding Experience For Each Patient We Serve, We Always Put The Patient First. We Do Our Very Best To Help Each Patient Heal. We Value & Promote Diversity With Respect To Gender, Race, Religion, Ethnicity And Physical Ability / Disability. We Keep A Smile On Our Face And Laughter In Our Heart. Integrity: Our Word Is Our Bond; We Honor Our Commitment To Our Patients, Colleagues And The Community. We Add Value To Our Lives And To The Lives Of Others By Always Acting And Speaking With Kindness.</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#6350f2] p-5 text-white'>
                <h1 className='text-5xl text-center'>CHIROPRACTORS</h1>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 w-8/12 mx-auto my-20 bg-white'>
                <div className='w-9/12 my-5 text-center'>
                    <img className='mx-auto' src={P1} />
                    <h1 className='text-4xl my-5'>Martin Gillman, D.C.</h1>
                    <p className='text-xl text-left'>"I regard my mission as primarily that of “prevention”. I try to prevent, in so far as possible, the progression of cardiovascular illness in my patients. I also seek to keep my patients as far as possible free of cardiovascular emergencies. I seek to accomplish this through a lifestyle modification and medication."<br /><br />

                        Mr. Martin Gillman has served as the Director of the chiropractic department since 1999, helping patients function at their highest level and maintain good health. With over 17 years of practice experience, he is a member is good standing of the American Chiropractic Association. Before joining NYMDC, Mr. Gillman practiced at a dedicated chiropractic center in Massapequa.<br /><br />

                        Mr. Gillman graduated cum laude with his Doctor of Chiropractic degree from Palmer College of Chiropractic-West and previously served as a Review Course Instructor for the Chiropractic National Board Examination. He enjoys taking the time to get to know patients and help them improve their overall health.</p>
                </div>
                <div className='w-9/12 my-5 text-center'>
                    <img className='mx-auto' src={P2} />
                    <h1 className='text-4xl my-5'>Jacob Sadigh, D.C.</h1>
                    <p className='text-xl text-left'>Dr. Jacob Sadigh brings to patients more than 30 years of experience in health care services. Dr. Sadigh demonstrated the ability to deliver high-quality, affordable and accessible health care through New York medical & Diagnostic Center unique approach; combining prevention, innovation and integration that can serve as a successful model for health care in America. <br /><br />

                        Dr. Sadigh and NYMDC’s team of Physicians and health care providers stress the importance of ethical  and efficient practice, utilizing unique integrative methods supported by current research. Their main goal is to provide personalized, comprehensive care combining advanced technology and technique based on most up-to-date researches; to deliver some of the best clinical outcomes in the nation, while also leading the country in prevention, patient safety and quality.<br /><br />

                        Dr. Sadigh’s dedication and drive have resulted in New York Medical & Diagnostic Center being recognized as a market leader in healthcare delivery in New York City and beyond, and have contributed significantly to raising the bar and creating a unique integrative medical care. </p>
                </div>
                <div className='w-9/12 my-5 text-center'>
                    <img className='mx-auto' src={P3} />
                    <h1 className='text-4xl my-5'>Yazan Jabaji, DC</h1>
                    <p className='text-xl text-left'>Dr. Yazan Jabaji is an amicable chiropractor located in Kew Gardens, NY. He brings his knowledge and experience to his role at New York Medical & Diagnostic Center. He is committed to the continuous care and education of his patients who require rehabilitation.<br /><br />

                        Dr. Jabaji received his bachelor’s degree from the State University of New York, Buffalo. He attended D’Youville College, where he earned his doctor of chiropractic degree. Constantly up-to-date on the most progressive techniques available, he strives to get his patients feeling their best.<br /><br />

                        Dr. Jabaji is a member of the American Chiropractic Association, American Academy of Spine Physicians, and the Tennessee Chiropractic Association. His patients find comfort in knowing that his primary goal is to help them regain control so that they may live their lives pain-free.</p>
                </div>
            </div>
            <div className='bg-[#6350f2] p-5 text-white'>
                <h1 className='text-5xl text-center'>ORTHOPEDICS</h1>
            </div>
            <div className='w-2/4 mx-auto py-20'>
                <h1 className='text-4xl mb-5'>Dr Louis Guillaume, Orthopedic - SA</h1>
                <p className='text-xl'>Dr Louis Guillaume is a FOREIGN medical graduate who specialized in general orthopedics and sports medicine. He has worked more than a decade at NYMDC. He earned his medical degree at faculty de medicine of Haiti and completed his orthopedic residency at the state hospital oh Haiti along with a fellowship degree in general orthopedics and pediatrics at cochin hospital and St Vincent de Paul in Paris. He also completed a sports medicine fellowship education with minimally invasive procedures, arthroscopy at the Hospital for joint diseases NYU. After more than a decade of practice in his country of origin as an orthopedic and arthroscopic surgeon, he relocated in New York state where he practices orthopedics and pain management procedures as a licensed specialist assistant in orthopedics at NYMDC. <br /><br />He has developed remarkable interest in treating pain with procedures under images and needle guidance. With more than 30 years of practice in the orthopedic field, he uses his experience to expand along with other providers the field of breakthrough treatment with regenerative sciences and the
                    use of mesenchymal stem cell therapy and other modalities for growing and regeneration of tissues at New York Medical and Diagnostic Center.</p>
            </div>
            <div className='bg-[#6350f2] p-5 text-white'>
                <h1 className='text-5xl text-center'>PHYSICAL THERAPISTS</h1>
            </div>
            <div className='w-2/4 mx-auto py-10 my-10'>
                <h1 className='text-4xl mb-5'>Dr. Paul B. Samuel</h1>
                <p className='text-xl'>Dr. Paul Samuel is a licensed physical therapist currently serving as the director of the physical therapy department at NYMDC, where he has practiced since 2004, specializing in the treatment of orthopedic and neuromuscular patients.<br /><br />Dr. Samuel completed his Master of Physical Therapy degree at New York University, and is currently working towards a graduate degree in Pathokinesiology. He has been in practice since 2001 and offers patients the highest quality of care to help them return to an active lifestyle.</p>
            </div>
            <div className='bg-[#6350f2] p-5 text-white'>
                <h1 className='text-5xl text-center'>ULTRASOUND TECHNICIAN</h1>
            </div>
            <div className='w-2/4 mx-auto py-10 my-10'>
                <h1 className='text-4xl mb-5'>Margarita Niazova</h1>
                <p className='text-xl mb-20'>Margarita received a degree in Diagnostic Medical Sonography from the Institute of Allied Medical Professions in Queens, New York.  She is a certified Ultrasound Technician as well as CPR certified.<br /><br />Margarita has extensive experience in both hospital and private office settings performing a variety of exams.  She is a member of the Society of Diagnostic Medical Sonography and American Institute of Ultrasound in Medicine.</p>

                <h1 className='text-4xl mb-5'>Naiyara Mahtab</h1>
                <p className='text-xl'>Naiyara received a Bachelor of Commerce degree and a Master degree in Economics from Dhaka University in Bangladesh.  She then completed a Diagnostic Medical Ultrasound Certificate from Sanford Brown Institute in New York, New York.<br /><br />Naiyara is an experienced Ultrasound Technologist who has worked in both private practice and hospital settings performing abdominal, OB/GYN, small parts, vascular and adult echo exams.  She is also CPR certified.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;