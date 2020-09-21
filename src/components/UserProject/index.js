import React from 'react';
import IconAndText from '../IconAndText';
import StarIcon from '../../assets/icons/star.svg'

import './styles.css';

function UserProject(props) {
    return (
        <div id="user-project">
            <span id="project-name">{props.repo.name}</span>
            <span id="project-description">{props.repo.description}</span>
            <IconAndText icon={StarIcon} text={props.repo.stargazers_count} />
        </div>
    );
}

export default UserProject;