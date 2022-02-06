import { generateRepositoryTuples } from '.';

describe('generateRepositoryTuples', () => {
  it('generates array tuples in the form of [owner, name]', () => {
    const pathname = '/cool-guy,cool-girl,cool-cat,cool-dog';
    const expectedRepositoryTuples = [
      ['cool', 'guy'],
      ['cool', 'girl'],
      ['cool', 'cat'],
      ['cool', 'dog'],
    ];

    const repositoryTupleArray = generateRepositoryTuples(pathname);

    expect(repositoryTupleArray).toStrictEqual(expectedRepositoryTuples);
  });
});
