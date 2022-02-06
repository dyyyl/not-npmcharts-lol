export const generateRepositoryTuples = (pathname: string) =>
  pathname
    .substring(1) // remove the leading '/'
    .split(',') // split the string by ','
    .map((repository) => repository.split('-')); // split the repo by into [owner, name] tuple
