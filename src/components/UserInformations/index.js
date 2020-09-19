import React from 'react';
import IconAndText from '../IconAndText'

import OrganizationIcon from '../../assets/icons/organization.svg';
import LocationIcon from '../../assets/icons/location.svg';
import StarIcon from '../../assets/icons/star.svg';
import RepositoriesIcon from '../../assets/icons/repositories.svg';
import FollowersIcon from '../../assets/icons/followers.svg';

import './styles.css';

function UserInformations(){
    return(
        <div id="user-informations">
            <img src="../../assets/icons/location-icon.svg" id="user-avatar" />

            <span id="user-name">Darth Vader</span>
            <span id="user-login">anakinskywalker</span>
            <div id="icon-and-text">
                <IconAndText icon={OrganizationIcon} alt="Organization Icon" text="The galactic Empire"/>
                <IconAndText icon={LocationIcon} alt="Location Icon" text="Tatooine"/>
                <IconAndText icon={StarIcon} alt="Star Icon" text="1.000.000"/>
                <IconAndText icon={RepositoriesIcon} alt="Repositories Icon" text="4"/>
                <IconAndText icon={FollowersIcon} alt="Followers Icon" text="9.999.999"/>
            </div>    

        </div>   

    );
}

export default UserInformations;