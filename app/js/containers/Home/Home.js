import React, { Component } from 'react';
require('./Home.scss');

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <marquee>Главная страница.</marquee>
      </div>
    );
  }
}

