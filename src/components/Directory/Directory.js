import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuItem from '../MenuItem/MenuItem';

import './Directory.styles.scss';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import DirectoryItemType from '../../typings/DirectoryItem.type';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

Directory.propTypes = {
  sections: PropTypes.arrayOf(DirectoryItemType)
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
