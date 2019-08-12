import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import './MenuItem.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div
    className={`${size || ''} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="substitle">Hats</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  history: ReactRouterPropTypes.history,
  match: ReactRouterPropTypes.match
};

export default withRouter(MenuItem);
