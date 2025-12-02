import type { GitHubRepo, GitHubUser, Project } from './types'

const GITHUB_API = 'https://api.github.com'

export async function getGitHubUser(username: string): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`${GITHUB_API}/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching GitHub user:', error)
    return null
  }
}

export async function getGitHubRepos(
  username: string,
  options: {
    sort?: 'created' | 'updated' | 'pushed' | 'full_name'
    direction?: 'asc' | 'desc'
    per_page?: number
  } = {}
): Promise<GitHubRepo[]> {
  const { sort = 'updated', direction = 'desc', per_page = 100 } = options

  try {
    const response = await fetch(
      `${GITHUB_API}/users/${username}/repos?sort=${sort}&direction=${direction}&per_page=${per_page}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

export async function getFeaturedProjects(
  username: string,
  featuredRepoNames?: string[]
): Promise<Project[]> {
  const repos = await getGitHubRepos(username, {
    sort: 'updated',
    direction: 'desc',
  })

  if (!repos.length) {
    return []
  }

  // Filter featured repos or get top starred repos
  let selectedRepos: GitHubRepo[]

  if (featuredRepoNames && featuredRepoNames.length > 0) {
    // Get specific repos by name
    selectedRepos = repos.filter((repo) =>
      featuredRepoNames.includes(repo.name)
    )
  } else {
    // Get top 6 repos by stars
    selectedRepos = repos
      .filter((repo) => !repo.fork) // Exclude forks
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
  }

  return selectedRepos.map((repo) => ({
    title: repo.name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: repo.description || 'No description available',
    tags: repo.topics.length > 0 ? repo.topics : [repo.language || 'Code'],
    github: repo.html_url,
    external: repo.homepage || undefined,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language || undefined,
  }))
}

export async function getPinnedRepos(username: string): Promise<Project[]> {
  // GitHub doesn't have a public API for pinned repos
  // This is a workaround using GraphQL would require authentication
  // For now, we'll use the featured projects approach
  return getFeaturedProjects(username)
}
