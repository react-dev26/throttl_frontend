import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import colors from 'styles/colors';
import styles from './styles';

export default class CustomScrollBar extends Component {

  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = { top: 0 };
    this.renderView = this.renderView.bind(this);
  }
  componentDidMount() {
  }

  renderView({ style, ...props }) {
    const { top } = this.state;
    const viewStyle = {
      backgroundColor: colors.primary,
      color: `rgb(${Math.round(255 - (top * 255))})`,
    };
    return (
      <div
        className="box"
        style={{ ...style, ...viewStyle }}
        {...props}
      />
    );
  }
  render() {
    const renderThumb = (style, ...props) =>
      <div
        style={{ ...style, ...styles.thumbStyle }}
        {...props}
      />;
    return (
      <Scrollbars
        renderView={this.renderView}
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        {...this.props}
      />
    );
  }
}
