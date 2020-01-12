import React from 'react';

export function Employee(props) {
    return (<div className="item">
        <div className="testimony-wrap p-4 pb-5">
            <div className="user-img mb-5" style={{backgroundImage: `url(${props.backgroundImage})`}}>
                <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left"></i>
                </span>
            </div>
            <div className="text text-center">
                <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="name">Garreth Smith</p>
                <span className="position">{props.position}</span>
            </div>
        </div>
    </div>
    )
}
