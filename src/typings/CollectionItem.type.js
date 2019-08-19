import PropTypes from 'prop-types';
import CartItemType from './CartItem.type';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(CartItemType).isRequired
});
