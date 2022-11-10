
/**
 * A function that converts the current date's format.
 *
 * @return {string} date in YYYY-MM-DD format
 *
 * @example
 *
 *     formatDate();
 */

export const formatDate = () => {
  let currDate = new Date();
  
  return currDate.toISOString().split('T')[0];

};