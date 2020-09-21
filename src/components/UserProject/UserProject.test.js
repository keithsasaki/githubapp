import React from 'react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import UserProject from '.';

describe("Testing UserProject Component", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<UserProject />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})