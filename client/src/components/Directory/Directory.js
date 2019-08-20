import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuItem from '../MenuItem/MenuItem';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import DirectoryItemType from '../../typings/DirectoryItem.type';
import { DirectoryWrapper } from './Directory.styles';

const Directory = ({ sections }) => (
  <DirectoryWrapper>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryWrapper>
);

Directory.propTypes = {
  sections: PropTypes.arrayOf(DirectoryItemType).isRequired
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
