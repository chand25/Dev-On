import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';// ES6
import TransitionGroup from 'react-addons-transition-group';


function fadesAway (Component) {
  return class FadesAway extends React.Component {
    componentWillEnter (callback) {
      const el = findDOMNode(this);
      TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
    }

    componentWillLeave (callback) {
      const el = findDOMNode(this);
      TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
    }

    render () {
      return <Component ref="child" {...this.props} />;
    }
  }
}
