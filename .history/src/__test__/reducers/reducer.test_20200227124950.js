import reducer from '../../reducers';
import ProductMock from '../../__mocks__/Product.Mock';

describe('Reducers', () => {
  test('Retornar initial State', () => {
    expect(reducer('ads', '')).toEqual('ads');
  });
});
