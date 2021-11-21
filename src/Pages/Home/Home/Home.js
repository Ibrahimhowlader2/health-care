import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import IconSection from '../IconSection/IconSection';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner/>
            <Services/>
            <IconSection/>
            <Doctors/>
        </>
    );
};

export default Home;