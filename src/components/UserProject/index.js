import React from 'react';
import IconAndText from '../IconAndText';
import StarIcon from '../../assets/icons/star.svg'

import './styles.css';

function UserProject(props) {
    return (
        <div id="user-project">
            <span id="project-name">{props.projectName}</span>
            <span id="project-description">{props.projectDescription}</span>
            <IconAndText icon={StarIcon} text={props.stargazers_count} />
        </div>
    );
}

export default UserProject;