import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import FontAwesome from 'react-fontawesome';
import '../stylesheets/components/carousel.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Carousel wrapper component
class Carousel extends React.Component {

  state = {
    activeIndex: 0
  }
  
  propTypes = {
      vertical: PropTypes.bool,
      left: PropTypes.bool
  }
  
  defaultProps = {
      vertical: true,
      left: true
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
  
  renderLeftOrTopArrow = () => {
    return (
        <a
            href="#"
            className={classNames({
                "carousel__arrow": true,
                "carousel__arrow--left": !this.props.vertical,
                "carousel__arrow--up": this.props.vertical,
            })}
            onClick={e => this.goToNextSlide(e)}
        >
            {this.props.vertical ? <FontAwesome name="angle-up" size="2x"/> 
                : <FontAwesome name="angle-left" size="2x"/>}
        </a>
    );
  }
  
  renderIndicators = () => {
    return (
        <Row className="carousel__indicators" between="xs">
            {this.props.slides.map((slide, index) =>
              <Col xs={this.props.vertical ? 12 : 1} key={index}>
                <a
                  className={classNames({
                    "carousel__indicator": true,
                    "carousel__indicator--active": index == this.state.activeIndex,
                    "vertical": this.props.vertical
                  })}
                  onClick={e => this.goToSlide(index)}
                />
              </Col>
            )}
        </Row>
    );
  }
  
  renderRightOrBottomArrow = () => {
    return (
        <a
            href="#"
            className={classNames({
                "carousel__arrow": true,
                "carousel__arrow--right": !this.props.vertical,
                "carousel__arrow--down": this.props.vertical,
            })}
            onClick={e => this.goToNextSlide(e)}
        >
            {this.props.vertical ? <FontAwesome name="angle-down" size="2x"/> 
                : <FontAwesome name="angle-right" size="2x"/>}
        </a>  
    );
  }
  
  renderHorizontalControls = () => {
       return (
          <Row between="xs">
            <Col xs>
                <Row start="xs">
                    <Col xs={1}>
                        {this.renderLeftOrTopArrow()}
                    </Col>      
                </Row>
            </Col>
            <Col xs>
                <Row center="xs">
                    <Col xs>
                      {this.renderIndicators()}
                    </Col>
                </Row>
            </Col>
            <Col xs>
                <Row end="xs">
                    <Col xs={1}>
                      {this.renderRightOrBottomArrow()}
                    </Col>
                </Row>
            </Col>
          </Row>
    );
  }

  renderVerticalControls = () => {
      
    return (
        <Col>
            <Row top="xs">
                <Col xs={12}>
                    {this.renderLeftOrTopArrow()}
                </Col>
            </Row>
            <Row middle="xs">
                <Col xs={12}>
                    {this.renderIndicators()}
                </Col>
            </Row>
            <Row bottom="xs">
                <Col xs={12}>
                    {this.renderRightOrBottomArrow()}
                </Col>
            </Row>
        </Col>
    );
      
  }

   render() {
    return (
      <Grid className="carousel-container">
        <Grid className="carousel">
          <Row>
            {this.props.vertical && this.props.left && 
                <Col xs={1}>
                    {this.renderVerticalControls()}
                </Col>}
            <Col xs>
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
              </Col>
              {this.props.vertical && !this.props.left && 
                <Col xs={1}>
                    {this.renderVerticalControls()}
                </Col>}
          </Row>

        {!this.props.vertical && this.renderHorizontalControls()}
        </Grid>
      </Grid>
    );
  }
}

export default Carousel;