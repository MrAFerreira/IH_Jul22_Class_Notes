import React, { Component } from 'react';
import Button from '../Button/Button';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Button link="https://www.google.com" text="Visit Google" />
          </li>
          <li>
            <Button link="https://www.wikipedia.org" text="Visit Wikipedia" />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
