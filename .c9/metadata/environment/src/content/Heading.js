{"filter":false,"title":"Heading.js","tooltip":"/src/content/Heading.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":27,"column":23},"action":"insert","lines":["'use strict';","","import React from 'react';","import { Link } from 'react-router';","import { Grid, Row, Col } from 'react-flexbox-grid';","import '../stylesheets/components/heading.scss';","","const Heading = (props) => {","","    return (","        <Grid fluid className=\"Heading\">","            <Row center=\"xs\">","                <Col><Link to=\"/\" className=\"title\">Tyler Gauch</Link></Col>","            </Row>","","            <Row around=\"xs\" className=\"nav\">","                <Col xs={2}><Link to=\"/\" className=\"nav-link\">Home</Link></Col>","                <Col xs={2}><Link to=\"/portfolio\" className=\"nav-link\">Portfolio</Link></Col>","                <Col xs={2}><Link to=\"/resume\" className=\"nav-link\">Resume</Link></Col>","                <Col xs={2}><Link to=\"/about\" className=\"nav-link\">About</Link></Col>","                <Col xs={2}><Link to=\"/contacts\" className=\"nav-link\">Contacts</Link></Col>","            </Row>","        </Grid>","    );","","}","","export default Heading;"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":27,"column":23},"end":{"row":27,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1523492428983,"hash":"ca0a3d1a786fa8381377ee8c19cbdb66892399de"}