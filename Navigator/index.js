import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Transitions
import { CSSTransitionGroup } from 'react-transition-group';

// Styles
import './index.css';

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
  }

  componentDidMount() {
    if (this.props.active === '') {
      console.warn('<Navigator /> component needs `active` props to render.');
    }
    this.defineHistory();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      this.defineHistory();
    }
  }

  render() {
    let backButton, backButtonClickable;
    if (this.props.backButton !== null) {
      backButton = React.Children.toArray(this.props.backButton)[0];
      backButtonClickable = React.cloneElement(backButton, { onClick: this.back.bind(this), className: 'simulate-button' });
    }
    const renderedButton =
      backButtonClickable !== undefined ? (
        backButtonClickable
      ) : (
        <button className="simulate-button" onClick={this.back.bind(this)}>
          Back
        </button>
      );
    const isBackButton = this.state.history.length > 1 ? renderedButton : null;

    const childrenArray = React.Children.toArray(this.props.children).filter(item => item.type.name === 'View');
    const children = childrenArray.find(item => item.props.name === this.state.history[this.state.history.length - 1]);

    return (
      <div style={this.props.style} className={'navigator-content ' + this.props.className}>
        {isBackButton}
        <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {children}
        </CSSTransitionGroup>
      </div>
    );
  }

  /**
   * Add active Navigator.View `name` prop on the
   * history state array
   */
  defineHistory() {
    setTimeout(() => {
      const aux = this.state.history;
      if (this.props.loop) {
        aux.push(this.props.active);
        this.setState({ history: aux });
      } else if (aux.find(item => item === this.props.active) === undefined) {
        aux.push(this.props.active);
        this.setState({ history: aux });
      }
    }, 200);
  }

  /**
   * Erase the last item of history array.
   */
  back() {
    const aux = this.state.history;
    aux.pop();
    this.setState({ history: aux });
  }
}

const View = props => (
  <div {...props} className={'navigator-content ' + (props.className !== undefined ? props.className : null)}>
    {props.children}
  </div>
);
Navigator.View = View;

Navigator.defaultProps = {
  backButton: null,
  loop: false,
  active: '',
  style: {},
  className: ''
};

Navigator.propTypes = {
  backButton: PropTypes.any,
  active: PropTypes.string,
  loop: PropTypes.bool
};

export default Navigator;
