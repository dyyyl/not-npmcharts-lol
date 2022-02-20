import { OctokitResponse } from '@octokit/types';
import { components } from '@octokit/openapi-types';

export type OctokitRepository = components['schemas']['nullable-repository'];

export type RepositoryResponse = OctokitResponse<OctokitRepository>;

export type Tuple = [string, string];
