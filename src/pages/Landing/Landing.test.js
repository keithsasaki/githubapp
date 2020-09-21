import React from 'react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import Landing from '.';

describe("Testing Landing Component", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<Landing />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})