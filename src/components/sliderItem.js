import React from 'react';

export function SliderItem(props) {
    return (
        <div className="slider-item" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                    <div className="col-md-12 text-center">
                        <h1 className="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
                        <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                        <p><a href="#" className="btn btn-primary">View Details</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
}
 