import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

// const title = 'My Minimal React Webpack Babel Setup';
// ReactDOM.render(
//   <div>{title}</div>,
//   document.getElementById('app')
// );


// function getGreating(user) {
//   if (user) {
//     return <h1>Hello, {user}!</h1>
//   }
//   return <h1>Hello, Stranger!</h1>  
// }

// const element = getGreating('user')
// ReactDOM.render(
//   <div>{element}</div>,
//   document.getElementById("app")
// );

// class HelloWorld extends React.Component {
//   render() {
//     return <div>Hello, World!</div>;
//   }
// }

ReactDOM.render(<Counter />, document.getElementById('app'));

module.hot.accept();