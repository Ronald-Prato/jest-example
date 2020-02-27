const getData = (api) => {
  return fetch(api)
    .then(response => response.json())
    .then(response => response)
    .catct(error => error);
};

export default getData;
