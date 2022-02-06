import { generateRepositoryString } from '.';

describe('generateRepositoryString', () => {
  it('generates repository string from array of tuples', () => {
    const repositoryTuples = [
      ['cool', 'guy'],
      ['cool', 'girl'],
      ['cool', 'cat'],
      ['cool', 'dog'],
    ];
    const expectedRepositoryString = 'cool-guy,cool-girl,cool-cat,cool-dog';

    const repositoryString = generateRepositoryString(repositoryTuples);

    expect(repositoryString).toBe(expectedRepositoryString);
  });
});
