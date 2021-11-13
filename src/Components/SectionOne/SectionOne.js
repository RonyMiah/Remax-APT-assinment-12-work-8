import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SectionOne.css'

const SectionOne = () => {
    return (
        <div className="middel-text text-center my-5">
                <Container >
                    <Row>
                    <Col xs={12} md={6}>
                        <img className="w-100 " src="https://peak-static-prod.remax.booj.io/web/corporate-home-misc.png" alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                    
                        <h2  className="text-start py-3">The Right Agent in any Market</h2>
                        <p className="text-start">With the limited number of homes on the current U.S. market, you need an agent with the right connections, technology and strategies to achieve your home buying or selling vision. Whether you’re feeling overwhelmed and want someone to take the wheel, or you just need a second opinion and you have it covered, you can be rest assured a RE/MAX agent is the right agent for any level of service, in any market condition</p>
                        <Link  to="/"> <h6 className="text-start">Find a RE/MAX Agent</h6></Link>
                    </Col>
                    </Row>
              </Container>
            
        </div>
    );
};

export default SectionOne;