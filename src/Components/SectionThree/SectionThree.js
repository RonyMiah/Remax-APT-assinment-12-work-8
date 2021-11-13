import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SectionThree.css'


const SectionThree = () => {
    return (
        <div className="last-section pt-5 text-center">
            <h2 py-5>RE/MAX News</h2>
            <Container>
            <Row>
                <Col xs={12} md={8}>
                <img className="w-100" src="https://images.prismic.io/remaxnews/0c92d779-d31b-4893-b3b8-7cbaa3579456_new_construction.png?auto=compress,format&rect=0,53,2172,1069&w=1440&h=709" alt="" />
                </Col>
                <Col className="text-start pt-3" xs={12} md={4}>
                        <h3>Why You Need a Buyer’s Agent to Purchase a New Con…</h3>
                        <h3>November 10, 2021</h3>
                        <h3>Buying A Home</h3>
                        <p>
                        The idea of a customized, new residential construction house is enticing to some prospective homeowners, but the process to get there can be grueling. Working with a buyer’s agent along the way can he…
                        </p>

                       
                        <Link className="text-decoration-none"> read the post</Link>
                </Col>
            </Row>
            </Container>

           </div>
    );
};

export default SectionThree;