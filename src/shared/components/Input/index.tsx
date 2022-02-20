import { useRef } from 'react';
import { Search } from 'react-feather';

import { Form } from './Form';
import { InputField } from './InputField';

interface InputProps {
  makeHandleSubmit: (
    ref: React.RefObject<HTMLFormElement>,
  ) => (event: React.FormEvent<HTMLFormElement>) => void;
  name: string;
}

export const Input = ({ makeHandleSubmit, name }: InputProps) => {
  const formRef = useRef(null);

  const handleSubmit = makeHandleSubmit(formRef);

  return (
    <Form action="#" ref={formRef} onSubmit={handleSubmit}>
      <InputField
        type="text"
        name={name}
        placeholder="Search a GitHub Repository..."
        required
      />
      <button
        type="submit"
        style={{ background: 'transparent', border: 'none' }}
      >
        <Search
          style={{
            placeSelf: 'center',
            color: '#37374a',
            marginRight: '1.8rem',
            cursor: 'pointer',
          }}
        />
      </button>
    </Form>
  );
};
