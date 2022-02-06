export const generateRepositoryString = (
  repositoryTupleArray: Array<Array<string>>,
) => repositoryTupleArray.map((repository) => repository.join('-')).join(',');
