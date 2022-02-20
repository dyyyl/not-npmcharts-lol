import { useEffect, useState } from 'react';
import { Star } from 'react-feather';

import { getRepository } from 'shared/queries';
import { formatCount, formatDate } from 'shared/utils';
import { RepositoryResponse } from 'shared/types';

import { InfoContainer } from './InfoContainer';
import { LastUpdated } from './LastUpdated';
import { StarCount } from './StarCount';

interface InfoProps {
  owner: string;
  name: string;
}

export const Info = ({ owner, name }: InfoProps) => {
  const [repository, setRepository] = useState<RepositoryResponse>();

  useEffect(() => {
    getRepository(owner, name)
      .then((repo) => setRepository(repo as RepositoryResponse))
      .catch((error) => console.error(error));
  }, [owner, name]);

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
