export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
  language: string | null
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
  size: number
}

export interface GitHubUser {
  login: string
  name: string
  avatar_url: string
  bio: string | null
  public_repos: number
  followers: number
  following: number
  html_url: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  external?: string
  stars?: number
  forks?: number
  language?: string
}
