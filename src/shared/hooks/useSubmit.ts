import { FormEvent, RefObject } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { Tuple } from 'shared/types';
import { generateRepositoryString } from 'shared/utils';

/**
 * Handles the submission of the "form", Partially Applied.
 * @param {Array<Tuple>} repositories - The source of truth for repos in URL
 * @param {NavigateFunction} navigate - The navigate function
 * @param {React.RefObject<HTMLFormElement>} formRef - Reference to the form
 * @param {React.FormEvent<HTMLFormElement>} event generic (lol) FormEvent
 * @returns `the inky dark  v o i d`
 */
export const useSubmit =
  (repositories: Array<Tuple> | null, navigate: NavigateFunction) =>
  (formRef: RefObject<HTMLFormElement>) =>
  (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent default form submission

    const formData = new FormData(event.currentTarget); // yeet form data

    // for this next bit, just assume that the input is not-null (it's a required field)
    const repository = (formData.get('repository') as string)!.split('_') as Tuple;

    // clear input if repo exists
    if (repositories?.map((repo) => repo.join('_')).includes(repository.join('_'))) {
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
