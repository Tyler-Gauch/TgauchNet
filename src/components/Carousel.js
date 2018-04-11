import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import FontAwesome from 'react-fontawesome';
import '../stylesheets/components/carousel.scss';

// Carousel wrapper component
class Carousel extends React.Component {

  state = {
    activeIndex: 0
  }

  goToSlide = index => {
    this.setState({ activeIndex: index });
  }

  goToPrevSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

   render() {
    return (
      <Grid className="carousel-container">
        <Grid className="carousel">
          <a
            href="#"
            className="carousel__arrow carousel__arrow--left"
            onClick={e => this.goToPrevSlide(e)}
          >
            <FontAwesome name="angle-left" size="2x"/>
          </a>

          <ul className="carousel__slides">
            {this.props.slides.map((slide, index) =>
              <li
                className={
                  index == this.state.activeIndex
                    ? "carousel__slide carousel__slide--active"
                    : "carousel__slide"
                }
                key={index}
              >
                <p className="carousel-slide__content">{slide.content}</p>

                <p>
                  <strong className="carousel-slide__author">
                    {slide.author}
                  </strong>,
                  {" "}<small className="carousel-slide__source">
                    {slide.source}
                  </small>
                </p>
              </li>
            )}
          </ul>

          <a
            href="#"
            className="carousel__arrow carousel__arrow--right"
            onClick={e => this.goToNextSlide(e)}
          >
            <FontAwesome name="angle-right" size="2x"/>
          </a>

          <ul className="carousel__indicators">
            {this.props.slides.map((slide, index) =>
              <li key={index}>
                <a
                  className={
                    index == this.state.activeIndex
                      ? "carousel__indicator carousel__indicator--active"
                      : "carousel__indicator"
                  }
                  onClick={e => this.goToSlide(index)}
                />
              </li>
            )}
          </ul>
        </Grid>
      </Grid>
    );
  }
}

export default Carousel;