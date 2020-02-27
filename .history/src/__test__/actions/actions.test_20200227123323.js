import actions from '../../actions';
import ProductMock from '../../__mocks__/Product.Mock';

describe('Actions', () => {
  test('addToCart Action', () => {
    const payload = ProductMock;
    const expecter = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expecter);
  });
});

