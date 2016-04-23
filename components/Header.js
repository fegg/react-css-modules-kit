import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import Radium from 'radium';

import commonStyles from '../css/base/common.css';
import styles from '../css/modules/header.css';

const option = {
  allowMultiple: true
};

@CSSModules(styles, option)
@Radium
export default class Header extends Component {
  render () {
    return (
      <div styleName="outer wrap">
        <h1 style={radiumStyles.text} className={commonStyles.title}>Header</h1>
      </div>
    );
  }
}

export default CSSModules(Header, styles, option);

let radiumStyles = {
  text: {
    textDecoration: 'underline'
  }
};