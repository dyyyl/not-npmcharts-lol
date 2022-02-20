import { Star } from 'react-feather';

import { RepositoryResponse } from 'shared/types';
import { formatCount, formatDate } from 'shared/utils';

import { InfoContainer } from './InfoContainer';
import { LastUpdated } from './LastUpdated';
import { StarCount } from './StarCount';

interface InfoProps {
  repository?: RepositoryResponse;
}

export const Info = ({ repository }: InfoProps) => {
  // cheeky typeguard for style
  if (repository?.data)
    return (
      <InfoContainer>
        <Star size={14} color="#ffffff" />
        {repository && (
          <StarCount>{formatCount(repository.data.stargazers_count)}</StarCount>
        )}
        <LastUpdated>
          Updated {formatDate(new Date(repository.data.updated_at as string))}
        </LastUpdated>
      </InfoContainer>
    );
  else return null; // TODO replace with skeletor? Stretch goal.
};
