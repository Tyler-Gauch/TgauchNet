import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import './stylesheets/base/base.scss';

const title = "testing";

ReactDOM.render(
  <div>{title}
  <div>Just making sure</div>
    <FontAwesome name="rocket" size="2x"/>
  </div>,
  document.getElementById('app')
);

module.hot.accept();