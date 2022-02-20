import { formatDate } from '.';

/**
 * Flakey, and will fail in a year - but we won't care about this in a year.
 */
describe('formatDate', () => {
  it('properly formats a date', () => {
    const date = new Date('2019-12-20T15:57:37Z');
    const expectedFormattedDate = 'about 2 years ago';

    const formattedDate = formatDate(date);

    expect(formattedDate).toEqual(expectedFormattedDate);
  });
});
