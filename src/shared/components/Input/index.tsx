import debounce from 'lodash/debounce';
import { useRef, useState } from 'react';
import { getRepositories } from 'shared/queries';
import { OctokitRepository } from 'shared/types';

import { Form } from './Form';
import { Hints } from './Hints';
import { InputField } from './InputField';
import { SearchIcon } from './SearchIcon';
import { SubmitButton } from './SubmitButton';

interface InputProps {
  makeHandleSubmit: (
    ref: React.RefObject<HTMLFormElement>,
  ) => (event: React.FormEvent<HTMLFormElement>) => void;
  name: string;
}

/**
 * Main input field for users to search for repositories.
 * @param makeHandleSubmit - First partially applied useSubmit handler.
 * @param name - Name of the input field.
 * @returns Input field with submit button icon.
 */
export const Input = ({ makeHandleSubmit, name }: InputProps) => {
  const formRef = useRef(null);

  /**
   * Second (and final) partially applied useSubmit handler.
   * @param event - Form event.
   * @returns void
   */
  const handleSubmit = makeHandleSubmit(formRef);

  const [hints, setHints] = useState<Array<OctokitRepository> | null>(null);

  /**
   * Handle input field change, and debounce to prevent excessive requests.
   * @param event - Form event.
   */
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    // Pesky whitespace.
    const query = event.target.value.trim();

    // If query is empty, clear hints.
    if (query === '') {
      setHints(null);
    } else {
      const repositories = await getRepositories(query); // otherwise,
      setHints(repositories.data.items as Array<OctokitRepository>); // fill with repo data.
    }
  };

  return (
    <Form
      action="#"
      ref={formRef}
      showHints={Boolean(hints)}
      onSubmit={handleSubmit}
    >
      <InputField
        type="text"
        name={name}
        placeholder="Search a GitHub Repository..."
        onChange={debounce(handleChange, 500)}
        showHints={Boolean(hints)}
        autoComplete="off"
        required
      />

      <SubmitButton type="submit">
        <SearchIcon />
      </SubmitButton>

      {hints && <Hints hints={hints} />}
    </Form>
  );
};
