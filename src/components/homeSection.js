import React from 'react';
import {SliderItem} from './sliderItem'

export function HomeSection(props) {
    return (
        <section id="home-section" className="hero">
				<div className="home-slider owl-carousel">
					<SliderItem backgroundImage={'images/bg_1.jpg'}/>
					<SliderItem backgroundImage={'images/bg_2.jpg'}/>
				</div>
			</section>
    )
}
 