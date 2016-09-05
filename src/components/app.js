import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Location from '../containers/location';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<Location />
      </div>
    );
  }
}
