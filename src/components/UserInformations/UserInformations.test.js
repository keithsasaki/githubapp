import React from 'react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import UserInformation from '.';

describe("Testing UserInformation Component", () => {
    it("matches snapshot", () => {
        const user = {
            avatar_url:"https://avatars2.githubusercontent.com/u/24439327?s=460&u=7b1ce31ae270195192c94f37116ffa46fcca572d&v=4",
            name: "Keith",
            login: "keithsasaki",
            company: "Concrete",
            location: "São Carlos",
            public_repos: 200,
            followers: 1000
        }

        const tree = renderer.create(<UserInformation user={user} starsSum={50}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})