import React from 'react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import UserProject from '.';

describe("Testing UserProject Component", () => {
    const repositorie = {
        projectName:"Projeto github app",
        projectDescription:"Projeto em react para consumir api do Github",
        stargazers_count: 30
    }
    it("matches snapshot", () => {
        const tree = renderer.create(<UserProject repo={repositorie}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})