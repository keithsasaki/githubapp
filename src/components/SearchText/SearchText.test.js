import React from 'react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import SearchText from '.';

describe("Testing SearchText Component", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<SearchText />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})