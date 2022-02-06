import { normalizedRepositoryRegex } from '.';

describe('normalizedRepositoryRegex', () => {
  it('validates shape of valid repository string', () => {
    const validRepositoryString = 'hey-coolguy';

    const truthyTest = normalizedRepositoryRegex.test(validRepositoryString);

    expect(truthyTest).toBeTruthy();
  });

  it('invalidates shape of invalid repository string', () => {
    const invalidRepositoryString = '-hey-coolguy-';

    const falsyTest = normalizedRepositoryRegex.test(invalidRepositoryString);

    expect(falsyTest).toBeFalsy();
  });
});
