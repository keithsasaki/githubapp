import React from 'react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import UserNotFound from '.';

describe("Testing UserNotFound Component", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<UserNotFound />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})