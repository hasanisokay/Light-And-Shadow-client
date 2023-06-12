import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import Gallery from '../Gallery/Gallery';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import TypewriterText from '../TypeWriter/TypewriterText';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Light & Shadow | Home</title>
            </Helmet>

            <Banner></Banner>
            <TypewriterText></TypewriterText>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Gallery></Gallery>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;