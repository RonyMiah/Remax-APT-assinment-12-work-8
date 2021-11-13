import React from 'react';
import AddReview from '../AddReview/AddReview';
import Banner from '../Banner/Banner';
import SectionTwo from '../ExtraSection1/SectionTwo';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';
import SectionOne from '../SectionOne/SectionOne';
import SectionThree from '../SectionThree/SectionThree';
import Services from '../Services/Services';

const Home = () => {
    return (

            // home section data 

        <div>
            <Banner></Banner>
            <SectionOne></SectionOne>
          
            <Services></Services>
            <SectionTwo></SectionTwo>
            <SectionThree></SectionThree>
            <ExtraSection2></ExtraSection2>
            <AddReview></AddReview>
        </div>
    );
};

export default Home;