import React from 'react';
import ReactDOM from 'react-dom';

const Component = () => (
  <div>
    <h1>TNY Tech Test Boilerplate App</h1>
    <p>Happy coding!</p>
  </div>
);

const appRoot = document.getElementById('app-root');

ReactDOM.render(<Component />, appRoot);
