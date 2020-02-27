import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '1234' }));
    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('1234');
      });
      expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
