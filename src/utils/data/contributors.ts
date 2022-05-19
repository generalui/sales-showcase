import { Contributor } from 'types/contributor'

export const contributors = {
  'kevin-grayson': {
    name: 'Kevin Grayson',
    githubUsername: 'grayson073',
  },
  'jase-pellerin': {
    name: 'Jase Pellerin',
    githubUsername: 'jasepellerin',
  },
  'wes-vance': {
    name: 'Wes Vance',
    githubUsername: 'wesvance',
  },
}

export type ContributorName = keyof typeof contributors

export const getContributor = (contributorName: ContributorName): Contributor =>
  contributors[contributorName]
