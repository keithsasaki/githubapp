import React from 'react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import IconAndText from '.';

describe("Testing IconAndText Component", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<IconAndText />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
