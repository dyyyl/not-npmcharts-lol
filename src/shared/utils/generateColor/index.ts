/**
 * Anything can be a hash function if you’re brave enough
 * @param string input to be hashed
 * @returns a hashed color value
 */
export const generateColor = (string: string): string => {
  const hash = string.split('').reduce((acc, cur) => {
    return acc + cur.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  let color = '#';

  for (let i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }

  return color;
};
