import React, { Component } from 'react';
import Slider from 'react-slick';
import img from '../../img/slider.jpg';

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return (
			<div className='slider container'>
				<Slider {...settings}>
					<div>
						<div>1</div>
					</div>
					<div>
						<div>2</div>
					</div>
					<div>
						<div>3</div>
					</div>
				</Slider>
			</div>
		);
	}
}
