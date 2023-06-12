import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div className='mx-6 pt-20'>
              <Helmet>
                <title>Light & Shadow | About</title>
            </Helmet>
            <h1 className='font-poppins text-3xl text-center font-semibold'>About Us</h1>
            <Fade duration={5000}> <p>Welcome to Light & Shadow, your premier destination for all things photography education. At Light & Shadow, we believe that capturing moments through a lens is an art form that deserves to be learned, appreciated, and mastered. Whether you're a beginner eager to explore the world of photography or a seasoned enthusiast looking to enhance your skills, we're here to guide you on your creative journey. <br />

                Founded in 2016, Light & Shadow has been at the forefront of photography education, consistently delivering high-quality classes and workshops to students of all levels. Our team of experienced and passionate instructors is dedicated to providing you with the knowledge, inspiration, and tools necessary to develop your unique photographic voice. <br />

                What sets us apart is our commitment to creating a supportive and inclusive learning environment. We understand that everyone's path in photography is different, which is why our classes are designed to be accessible and adaptable. Whether you prefer to learn in-person or online, we offer a range of flexible options to accommodate your schedule and individual learning style. <br />

                At Light & Shadow, we believe that photography is more than just technical proficiency; it's about storytelling and expressing your vision. Our curriculum goes beyond the basics of composition and exposure, delving into the realms of lighting, post-processing, and conceptualization. We'll empower you with the skills to capture breathtaking landscapes, intimate portraits, compelling street scenes, and everything in between. <br />

                Join our vibrant photography community, where you'll have the opportunity to connect with fellow enthusiasts, share your work, and receive valuable feedback. We foster an environment of collaboration, encouraging our students to explore their creativity together and push the boundaries of their photographic abilities. <br />

                We invite you to explore our diverse range of classes and workshops tailored to meet your specific goals and interests. Whether you're interested in nature photography, documentary storytelling, fashion and portrait photography, or any other niche, we have a class for you. Our instructors are not only talented photographers themselves but also experienced educators who are passionate about helping you grow as an artist. <br />

                Thank you for considering Light & Shadow as your educational partner in your photographic journey. We can't wait to inspire and guide you as you embark on this exciting adventure of capturing the world through your lens.</p></Fade>
        </div>
    );
};

export default AboutUs;