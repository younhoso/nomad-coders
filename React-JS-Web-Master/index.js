import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// <App />는 하나의 컴포넌트만 넣을수 있다. 하나 이상은 불가능하다.
ReactDOM.render(<App />, document.querySelector('#root'));