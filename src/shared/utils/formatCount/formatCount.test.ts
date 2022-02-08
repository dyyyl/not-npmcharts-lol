import { formatCount } from '.';

describe('formatCount', () => {
  it('properly formats a small number', () => {
    const smallNumber = 12;
    const expectedFormattedNumber = '12';

    const formattedNumber = formatCount(smallNumber);

    expect(formattedNumber).toEqual(expectedFormattedNumber);
  });

  it('properly formats a medium number', () => {
    const mediumNumber = 1234;
    const expectedFormattedNumber = '1.2K';

    const formattedNumber = formatCount(mediumNumber);

    expect(formattedNumber).toEqual(expectedFormattedNumber);
  });

  it('properly formats a larger number', () => {
    const largerNumber = 123456;
    const expectedFormattedNumber = '123K';

    const formattedNumber = formatCount(largerNumber);

    expect(formattedNumber).toEqual(expectedFormattedNumber);
  });
});
