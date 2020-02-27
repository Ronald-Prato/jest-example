import actions from '../../actions';
import ProductMock from '../../__mocks__/Product.Mock';

describe('Actions', () => {
  const payload = ProductMock;
  test('addToCart Action', () => {
    const expecter = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expecter);
  });

  test('removeToCart Action', () => {
    const expecter = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expecter);
  });
});

