import axios from "axios";

/**
 * A function that uses axios to perform asynchronous API calls.
 *
 * @param {string} method - A string param
 * @param {string} url - A string param
 * @param {string} [configs={}] - An optional string param
 * @return {string} <Promise>
 *
 * @example
 *
 *     httpRequest('get', 'https://www.example.com/', {});
 */

export const httpRequest = async (method, url, configs = {}) => {

  if (!url) return [];

  try {

    const response = await axios({
      method,
      url,
      params: configs
    });

    if(response.status === 200){

      const fetchedData = await response.data.data;

      if(!fetchedData) {
        return {
          data: response.data,
          error: null
        };
      }

      return {
        data: fetchedData,
        error: null
      };
    }
  } catch (error) {
    return {
      data: null,
      error: error.response
    };
  }
};