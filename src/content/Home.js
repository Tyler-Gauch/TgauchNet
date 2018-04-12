'use strict';

import React from 'react';
import { Link } from 'react-router';
import Page from './Page';
import Carousel from 'app/components/Carousel';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Slider from 'react-slick';

const Home = (props) => {

    var settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      arrows: false,
      adaptiveHeight: true,
      autoplay: true,
      draggable: false
    };

    return (
        <Page>
          <Grid>
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </Grid>
        </Page>
    );

}

export default Home;