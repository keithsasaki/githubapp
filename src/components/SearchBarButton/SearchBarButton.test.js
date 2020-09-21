import React from 'react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import SearchBarButton from '.';

describe("Testing SearchBarButton Component", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<SearchBarButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})