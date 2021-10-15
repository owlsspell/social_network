import { render, screen } from '@testing-library/react';
import SocialApp from './App';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders learn react link', () => {
  // render(<SocialApp />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const div = document.createElement('div');
  ReactDOM.render(<SocialApp />,div)
  ReactDOM.unmountComponentAtNode(div)
});
