import React from "react";
import logo from './Logo/logo.svg';


export default () => {
  return (
    <div className="component first-component">
      <h2>First Component</h2>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};
