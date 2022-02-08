import { formatDate } from '.';

describe('formatDate', () => {
  it('properly formats a date', () => {
    const date = new Date('2019-12-20T15:57:37Z');
    const expectedFormattedDate = 'about 2 years ago';

    const formattedDate = formatDate(date);

    expect(formattedDate).toEqual(expectedFormattedDate);
  });
});
