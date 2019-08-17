import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number
});
