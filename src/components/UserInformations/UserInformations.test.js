import React from 'react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import UserInformation from '.';

describe("Testing UserInformation Component", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<UserInformation />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})