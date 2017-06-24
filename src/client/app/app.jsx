if (module.hot) {
  module.hot.accept()
}

import React from 'react';
import './scss/style.scss';

const root = document.querySelector('#root')
root.innerHTML = `<p>Hello webpack.</p>`



export default class App extends Component {
  render() {
    return (
      <h1>Hello, world.</h1>
    );
  }
}
