import React from 'react';

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

            <p id="user-name">Darth Vader</p>
            <p id="user-login">anakinskywalker</p>
            <div id="icon-and-text">
                <img src={OrganizationIcon} />
                <span>The Galactic Empire</span>

                <img src={LocationIcon} />
                <span>Tatooine</span>

                <img src={StarIcon} />
                <span>1.000.000</span>

                <img src={RepositoriesIcon} />
                <span>4</span>

                <img src={FollowersIcon} />
                <span>9.999.999</span>
            </div>    

        </div>   

    );
}

export default UserInformations;