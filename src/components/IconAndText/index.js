import React from 'react';

import './styles.css';

function IconAndText(props) {
    return(
        <div className="icon-and-text">
            <img src={props.icon} alt={props.alt} />
            <span> {props.text} </span>
        </div>
    );
}

export default IconAndText;