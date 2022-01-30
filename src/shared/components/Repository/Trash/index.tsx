import { Trash2 } from 'react-feather';
import { TrashBin } from './TrashBin';

interface TrashProps {
  style: React.CSSProperties;
  handleClick: () => void;
}

export const Trash = ({ style, handleClick }: TrashProps) => (
  <TrashBin onClick={handleClick}>
    <Trash2 style={style} color="#ffffff" />
  </TrashBin>
);
