import { generateRepositoryTuples } from '.';

describe('generateRepositoryTuples', () => {
  it('generates array tuples in the form of [owner, name]', () => {
    const pathname = '/cool_guy,cool_girl,cool_cat,cool_dog';
    const expectedRepositoryTuples = [
      ['cool', 'guy'],
      ['cool', 'girl'],
      ['cool', 'cat'],
      ['cool', 'dog'],
    ];

    const repositoryTupleArray = generateRepositoryTuples(pathname);

    expect(repositoryTupleArray).toStrictEqual(expectedRepositoryTuples);
  });

  it('preserves the dashes of a repository name', () => {
    const pathname = '/coolguy_coolgirl-coolcat-cooldog';
    const expectedRepositoryTuples = [['coolguy', 'coolgirl-coolcat-cooldog']];

    const repositoryTupleArray = generateRepositoryTuples(pathname);

    expect(repositoryTupleArray).toStrictEqual(expectedRepositoryTuples);
  });

  it('ignores bad input and sanitizes', () => {
    const pathname = '/cool_guy,cool_girl,,cool_cat,wh atever,cool_dog,asdf';
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
