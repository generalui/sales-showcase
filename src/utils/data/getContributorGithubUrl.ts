import { ContributorName, getContributor } from 'utils/data/contributors'

export const getContributorGithubUrl = (contributorName: ContributorName) => {
  const { githubUsername } = getContributor(contributorName)
  return `https://github.com/${githubUsername}`
}
