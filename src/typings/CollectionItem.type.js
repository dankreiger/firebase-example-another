import PropTypes from 'prop-types';
import CartItemType from './CartItem.type';

export default PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  routeName: PropTypes.string,
  items: CartItemType
});
