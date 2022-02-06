import { Search } from 'react-feather';

import { Form } from './Form';
import { InputField } from './InputField';

interface InputProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  name: string;
}

export const Input = ({ handleSubmit, name }: InputProps) => {
  return (
    <Form action="#" onSubmit={handleSubmit}>
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
