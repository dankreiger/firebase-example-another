import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import {
  MenuItemWrapper,
  BackgroundImageWrapper,
  ContentWrapper,
  ContentTitle,
  ContentSubtitle
} from './MenuItem.styles';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <MenuItemWrapper
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageWrapper className="background-image" imageUrl={imageUrl} />
    <ContentWrapper className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>Hats</ContentSubtitle>
    </ContentWrapper>
  </MenuItemWrapper>
);

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  history: ReactRouterPropTypes.history,
  match: ReactRouterPropTypes.match
};

export default withRouter(MenuItem);
