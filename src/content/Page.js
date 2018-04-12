'use strict';

import React from 'react';
import { Link } from 'react-router';
import Heading from './Heading';

const Home = (props) => {

    return (
        <div>
            <Heading />

            <div>
                {props.children}
            </div>
        </div>
    );

}

export default Home;