import React from 'react';
import IconAndText from '../IconAndText'

import OrganizationIcon from '../../assets/icons/organization.svg';
import LocationIcon from '../../assets/icons/location.svg';
import StarIcon from '../../assets/icons/star.svg';
import RepositoriesIcon from '../../assets/icons/repositories.svg';
import FollowersIcon from '../../assets/icons/followers.svg';

import './styles.css';

function UserInformations(props){
    return(
        <div id="user-informations">
            <img src={props.user.avatar_url}  id="user-avatar" alt="user avatar"/>
            <span id="user-name">{props.user.name}</span>
            <span id="user-login">{props.user.login}</span>
            <div id="icon-and-text">
                <IconAndText icon={OrganizationIcon} alt="Organization Icon" text={props.user.company}/>
                <IconAndText icon={LocationIcon} alt="Location Icon" text={props.user.location}/>
                <IconAndText icon={StarIcon} alt="Star Icon" text={props.starsSum}/>
                <IconAndText icon={RepositoriesIcon} alt="Repositories Icon" text={props.user.public_repos}/>
                <IconAndText icon={FollowersIcon} alt="Followers Icon" text={props.user.followers}/>
            </div>    
        </div>   

    );
}

export default UserInformations;