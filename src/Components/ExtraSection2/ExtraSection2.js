import React from 'react';
import './ExtraSection.css'



const ExtraSection2 = () => {
    return (


            // extra section 2 

        <div className="extra-section-2 py-5">
            <h3 className="text-center">Our rental concierge does the heavy lifting</h3>

            <div className="row row-cols-1 row-cols-md-4 container mx-auto pt-5 g-5 container mx-auto">
                <div className="col-lg-4 col-md-6 col-sm-12" >
                    <div class="card h-100  pt-4 pb-3 border-0">
                    <i class="fas fa-house-user fs-1"></i>
                        <div class="" style={{margin: '0'}}>
                          <h5 class="card-text mt-3">Erin Fralinger, Broker/Owner</h5>
                          <p className="text-muted">
                          “I was drawn to the RE/MAX organization because it’s the best. It has the best reputation and the best agents with the most experience. To recruit agents that I want to work with, there really wasn’t another option."
                          </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" >
                    <div class="card h-100  pt-4 pb-3 border-0">
                    <i class="fas fa-house-user fs-1"></i>
                        <div class="" style={{margin: '0'}}>
                          <h5 class="card-text mt-3">Chris and Alicia Parker, Broker/Owners</h5>
                            <p className="text-muted">
                            “It’s been everything that we had hoped it would be, especially in terms of identity and independence. The RE/MAX brand was a big factor and we really underestimated the power"
                          </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" >
                    <div class="card h-100  pt-4 pb-3 border-0">
                    <i class="fas fa-house-user fs-1" ></i>
                        <div class="" style={{margin: '0'}}>
                          <h5 class="card-text mt-3">Michael Patterson, Broker/Owner</h5>
                          <p className="text-muted">“When deciding where I was going to take my team, I considered creating a boutique brokerage, as well as a number of other franchise options. I ultimately chose RE/MAX because of the brand and the focus on top performers. "
                          </p>
                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default ExtraSection2;