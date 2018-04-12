'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'app/stylesheets/components/heading.scss';

const Heading = (props) => {

    return (
        <Grid fluid className="Heading">
            <Row center="xs">
                <Col><Link to="/" className="title">Tyler Gauch</Link></Col>
            </Row>

            <Row around="xs" className="nav">
                <Col xs={2}><Link to="/" className="nav-link">Home</Link></Col>
                <Col xs={2}><Link to="/portfolio" className="nav-link">Portfolio</Link></Col>
                <Col xs={2}><Link to="/resume" className="nav-link">Resume</Link></Col>
                <Col xs={2}><Link to="/about" className="nav-link">About</Link></Col>
                <Col xs={2}><Link to="/contacts" className="nav-link">Contacts</Link></Col>
            </Row>
        </Grid>
    );

}

export default Heading;