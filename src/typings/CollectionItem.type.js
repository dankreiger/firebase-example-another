import PropTypes from 'prop-types';
import CartItemType from './CartItem.type';

export default PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  routeName: PropTypes.string,
  items: PropTypes.arrayOf(CartItemType)
});
