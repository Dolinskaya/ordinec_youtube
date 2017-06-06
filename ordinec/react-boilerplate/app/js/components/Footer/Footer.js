import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import * as footerActions from '../../redux/modules/footer';
require('./Footer.scss');

@connect(
    state => ({
      footerSteps: state.footer.footerSteps,
      footerStepsActive: state.footer.footerStepsActive,
    }),{
      setActive: footerActions.setStepsActive
    })
export default class Footer extends Component {
  static propTypes = {
    footerSteps: PropTypes.number,
    footerStepsActive: PropTypes.number,
  };
 
  render() {
    const stepsItems = Array(this.props.footerSteps).fill({}).map((e, i) => {
      return <div className={'steps__item ' + (i === this.props.footerStepsActive ? 'steps__item--active' : '')} key={i}>0{i+1}</div>;
    });

    return (
      <footer className="footer">
        {this.props.footerSteps && (
          <div className="steps">
            {stepsItems}
          </div>
        ) || false}
        <div className="footer__copy">by upsign tech</div>
      </footer>
    );
  }
}
