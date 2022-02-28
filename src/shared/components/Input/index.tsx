import debounce from 'lodash/debounce';
import React, { useRef, useState } from 'react';
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
  ) => (query: string) => void;
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

  const [hints, setHints] = useState<Array<OctokitRepository>>([]);
  const [activeHint, setActiveHint] = useState<number>(0);

  /**
   * Handle input field change, and debounce to prevent excessive requests.
   * @param event - Form event.
   */
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    // Pesky whitespace.
    const query = event.target.value.trim();

    // If query is empty (or too short to matter), clear hints.
    if (query === '' || query.length <= 1) {
      setHints([]);
    } else {
      setActiveHint(0); // Reset active hint on input change.
      const repositories = await getRepositories(query); // otherwise,
      setHints(repositories.data.items as Array<OctokitRepository>); // fill with repo data.
    }
  };

  /**
   * Okay let's put it all together now!
   */
  const triggerSubmit = () => {
    setActiveHint(0); // Reset active hint on submit.
    const { owner, name } = hints[activeHint]!; // Get active hint.
    setHints([]); // Clear hints.
    handleSubmit(`${owner.login}_${name}`); // Submit query.
  };

  return (
    <Form
      action="#"
      ref={formRef}
      showHints={hints.length > 0}
      onSubmit={(event) => event.preventDefault()}
    >
      <InputField
        type="text"
        name={name}
        placeholder="Search a GitHub Repository..."
        onChange={debounce(handleChange, 300)}
        onKeyDown={(event: React.KeyboardEvent) => {
          switch (event.key) {
            case 'Enter':
              if (hints[activeHint]) {
                triggerSubmit();
                break;
              } else {
                break; // Do nothing if there is nothing to be done.
              }

            case 'ArrowDown':
              if (hints.length > 0 && activeHint + 1 !== hints.length)
                setActiveHint(activeHint + 1);
              break;

            case 'ArrowUp':
              if (hints.length > 0 && activeHint !== 0)
                setActiveHint(activeHint - 1);
              break;

            default:
              break;
          }
        }}
        showHints={hints.length > 0}
        autoComplete="off"
      />

      <SubmitButton type="submit">
        <SearchIcon />
      </SubmitButton>

      {hints.length > 0 && (
        <Hints
          hints={hints}
          activeHint={activeHint}
          setActiveHint={setActiveHint}
          triggerSubmit={triggerSubmit}
        />
      )}
    </Form>
  );
};
