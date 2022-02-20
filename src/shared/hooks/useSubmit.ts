import { NavigateFunction } from 'react-router-dom';

import { Tuple } from 'shared/types';
import { generateRepositoryString } from 'shared/utils';

/**
 * Handles the submission of the "form", Partially Applied.
 * @param {Array<Tuple>} repositories - The source of truth for repos in URL
 * @param {NavigateFunction} navigate - The navigate function
 * @param {HTMLFormElement} formRef - Reference to the form
 * @param event generic (lol) FormEvent
 * @returns `the inky dark  v o i d`
 */
export const useSubmit =
  (repositories: Array<Tuple> | null, navigate: NavigateFunction) =>
  (formRef: React.RefObject<HTMLFormElement>) =>
  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent default form submission

    const formData = new FormData(event.currentTarget); // yeet form data

    // for this next bit, just assume that the input is not-null (it's a required field)
    const repository = (formData.get('repository') as string)!.split('-') as Tuple;

    // clear input if repo exists
    if (repositories?.map((repo) => repo.join('-')).includes(repository.join('-'))) {
      formRef.current!.reset(); // reset the form
      formRef.current?.focus(); // focus the form
      return;
    } else {
      // Are repositories already set? Let's add the new one to the list.
      const repositoryArray = repositories
        ? [...repositories, repository]
        : [repository]; // otherwise, fill the array with the new repo

      // Normalize the array of repositories into coherent string.
      const repositoryString = generateRepositoryString(repositoryArray);

      formRef.current!.reset(); // reset the form

      navigate(`/${repositoryString}`); // shunt user to the next url state

      formRef.current?.focus(); // focus the form
    }
  };
