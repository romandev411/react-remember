import queryString from 'query-string';
import config from '../config';

export const getUsers = options => {
  const defaultOptions = {
    results: 10,
    format: 'json',
    seed: config.API_KEY,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const query = queryString.stringify(finalOptions);

  return fetch(`${config.BASE_URL}?${query}`).then(res => res.json());
};
