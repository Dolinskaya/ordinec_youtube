import React, { Component } from 'react';
require('./offers.scss');

export default class Offers extends Component {
  render() {
    return (
      <div className="home">
        <marquee>Офферы</marquee>
      </div>
    );
  }
}

