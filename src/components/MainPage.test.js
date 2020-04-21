import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false,
    };

    wrapper = shallow(<MainPage {...mockProps} />);
});

it('expect to render MainPage component', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [
            {
                id: 3,
                name: 'John',
                email: 'john@gmail.com',
            },
        ],
        searchField: 'john',
        isPending: false,
    };
    wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots([])).toEqual([
        {
            id: 3,
            name: 'John',
            email: 'john@gmail.com',
        },
    ]);
});
