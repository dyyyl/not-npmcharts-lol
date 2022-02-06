import { generateColor } from '.';

describe('generateColor', () => {
  it('consistently hashes arbitrary string value to hex', () => {
    const string = 'Hey, Coolguy!';
    const expectedHash = '#4163f5';

    const actualHash = generateColor(string);

    expect(actualHash).toBe(expectedHash);
  });
});
