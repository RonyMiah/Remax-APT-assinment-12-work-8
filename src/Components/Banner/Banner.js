import ProgressBar from 'progress';
import React from 'react';

import './Banner.css'

const Banner = () => {
    
    return (
        <div className="banner-design text-center">
            <div className="text">
           
                        <div className=" pt-5 banner-text">
                            <h2 className="py-5 text-warning">Enhanced Hygiene</h2>
                            <p   className= "p-5 text-white fs-4"  >Book with confidence and enjoy a worry-free stay in every city <br /> with Homelike’s six hygiene and physical distancing guidelines.</p>
                        </div>
                        <h1 className='text-black'> </h1>
            </div>
        </div>
       
    );
};

export default Banner;