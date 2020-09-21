import React from 'react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import SearchResult from '.';

describe("Testing SearchResult Component", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<SearchResult />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})