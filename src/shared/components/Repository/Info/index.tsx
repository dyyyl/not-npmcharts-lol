import { Star } from 'react-feather';
import { InfoContainer } from './InfoContainer';
import { LastUpdated } from './LastUpdated';
import { StarCount } from './StarCount';

interface InfoProps {
  stars: string;
  lastUpdated: number;
}

export const Info = ({ stars, lastUpdated }: InfoProps) => {
  return (
    <InfoContainer>
      <Star size={14} color="#ffffff" />
      <StarCount>{stars}</StarCount>
      <LastUpdated>Updated {lastUpdated} days ago</LastUpdated>
    </InfoContainer>
  );
};
