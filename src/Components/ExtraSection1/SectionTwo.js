import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SectionTwo.css'

const SectionTwo = () => {
    return (
        <div className="SectionTwo">
           
                
            <Container>
            <Row>
            <Col xs={12} md={6}>
                <div className="SectionTwoBox mt-4">
                            <h2 className="text-start">Get the App</h2>
                            <hr className=" w-25 fw-bold" / >
                                <p className="text-start">
                                    Finding your dream home just got easier. Our home search app allows you to continue your search for available listings from the convenience of your smartphone or tablet — anytime, anywhere. Save homes you love, request information, schedule showings, and receive push notifications within minutes of homes hitting the market.

                                </p>
                            <Link to="#" > <p className="text-start"> Larn More</p> </Link>

                            <Container>
                                 <Row>
                                    <Col xs={12} md={5}>
                                        
                                        <Link className="text-decoration-none "  to="/coming">
                                                <div className="d-flex p-2 ">
                                                <i className="fab  fs-2 fa-apple"></i>
                                                <p  className=" ms-2 p-1">Download </p>
                                                </div>
                                        </Link>
                                    </Col>
                                    <Col xs={12} md={5}>
                                        <Link className="text-decoration-none" to="/coming">
                                            <div className="d-flex  p-2 ">
                                            <i className="fab fs-2 fa-google-play"></i>
                                            <p className=" ms-2 p-1">Download  </p>
                                             </div>
                                        </Link>
                                    </Col>
                                    
                                    <Col xs={12} md={2}>
                                   
                                    </Col>
                                </Row>
                            </Container>
                 </div>
            </Col>
            <Col xs={12} md={6}>
           <img className="w-50" src="https://i.ibb.co/KwSLWxJ/Nice-Png-google-map-image-png-3724269.png" alt="" />
            </Col>
           </Row>
            </Container>

          
        </div>
    );
};

export default SectionTwo;