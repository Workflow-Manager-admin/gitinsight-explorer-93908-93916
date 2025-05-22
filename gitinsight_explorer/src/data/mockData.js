/**
 * Mock data for GitInsight Explorer
 * This file contains sample data used for development and demonstration purposes
 */

// Sample repositories data
export const repositories = [
  {
    id: 1,
    name: 'react',
    fullName: 'facebook/react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    stars: 178450,
    forks: 36800,
    language: 'JavaScript',
    lastUpdated: '2023-06-15T14:32:21Z',
    owner: {
      login: 'facebook',
      avatarUrl: 'https://avatars.githubusercontent.com/u/69631?v=4'
    },
    topics: ['javascript', 'library', 'ui', 'frontend']
  },
  {
    id: 2,
    name: 'tensorflow',
    fullName: 'tensorflow/tensorflow',
    description: 'An Open Source Machine Learning Framework for Everyone',
    stars: 166900,
    forks: 87300,
    language: 'C++',
    lastUpdated: '2023-06-16T09:12:45Z',
    owner: {
      login: 'tensorflow',
      avatarUrl: 'https://avatars.githubusercontent.com/u/15658638?v=4'
    },
    topics: ['machine-learning', 'deep-learning', 'neural-networks']
  },
  {
    id: 3,
    name: 'vscode',
    fullName: 'microsoft/vscode',
    description: 'Visual Studio Code',
    stars: 142500,
    forks: 25600,
    language: 'TypeScript',
    lastUpdated: '2023-06-15T23:18:33Z',
    owner: {
      login: 'microsoft',
      avatarUrl: 'https://avatars.githubusercontent.com/u/6154722?v=4'
    },
    topics: ['editor', 'electron', 'typescript', 'ide']
  },
  {
    id: 4,
    name: 'flutter',
    fullName: 'flutter/flutter',
    description: 'Flutter makes it easy and fast to build beautiful apps for mobile and beyond',
    stars: 148200,
    forks: 23800,
    language: 'Dart',
    lastUpdated: '2023-06-16T12:45:19Z',
    owner: {
      login: 'flutter',
      avatarUrl: 'https://avatars.githubusercontent.com/u/14101776?v=4'
    },
    topics: ['dart', 'mobile', 'cross-platform', 'ui-framework']
  },
  {
    id: 5,
    name: 'rust',
    fullName: 'rust-lang/rust',
    description: 'Empowering everyone to build reliable and efficient software.',
    stars: 76900,
    forks: 11200,
    language: 'Rust',
    lastUpdated: '2023-06-16T10:32:11Z',
    owner: {
      login: 'rust-lang',
      avatarUrl: 'https://avatars.githubusercontent.com/u/5430905?v=4'
    },
    topics: ['rust', 'language', 'systems-programming']
  }
];

// Sample user profiles data
export const users = [
  {
    id: 1,
    login: 'torvalds',
    name: 'Linus Torvalds',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1024025?v=4',
    followers: 178000,
    following: 0,
    publicRepos: 6,
    company: 'Linux Foundation',
    location: 'Portland, OR',
    blog: 'https://www.kernel.org/',
    bio: 'Creator of Linux and Git',
    topRepositories: [
      { name: 'linux', stars: 139000, language: 'C' },
      { name: 'subsurface-for-dirk', stars: 1500, language: 'C++' }
    ]
  },
  {
    id: 2,
    login: 'gaearon',
    name: 'Dan Abramov',
    avatarUrl: 'https://avatars.githubusercontent.com/u/810438?v=4',
    followers: 74300,
    following: 171,
    publicRepos: 247,
    company: '@vercel',
    location: 'London, UK',
    blog: 'https://overreacted.io',
    bio: 'Working on @reactjs',
    topRepositories: [
      { name: 'redux', stars: 58900, language: 'TypeScript' },
      { name: 'react-hot-loader', stars: 12300, language: 'JavaScript' }
    ]
  },
  {
    id: 3,
    login: 'sindresorhus',
    name: 'Sindre Sorhus',
    avatarUrl: 'https://avatars.githubusercontent.com/u/170270?v=4',
    followers: 55200,
    following: 0,
    publicRepos: 1200,
    company: null,
    location: 'Norway',
    blog: 'https://sindresorhus.com',
    bio: 'Full-time open-sourcerer & indie dev',
    topRepositories: [
      { name: 'awesome', stars: 230000, language: null },
      { name: 'refined-github', stars: 19800, language: 'TypeScript' }
    ]
  }
];

// Sample trending repositories data
export const trendingRepos = [
  {
    name: 'deno',
    fullName: 'denoland/deno',
    description: 'A secure JavaScript and TypeScript runtime',
    language: 'TypeScript',
    stars: 85700,
    starsToday: 120,
    owner: {
      login: 'denoland',
      avatarUrl: 'https://avatars.githubusercontent.com/u/42048915?v=4'
    }
  },
  {
    name: 'supabase',
    fullName: 'supabase/supabase',
    description: 'The open source Firebase alternative',
    language: 'TypeScript',
    stars: 49800,
    starsToday: 95,
    owner: {
      login: 'supabase',
      avatarUrl: 'https://avatars.githubusercontent.com/u/54469796?v=4'
    }
  },
  {
    name: 'langchain',
    fullName: 'langchain-ai/langchain',
    description: 'Building applications with LLMs through composability',
    language: 'Python',
    stars: 42500,
    starsToday: 87,
    owner: {
      login: 'langchain-ai',
      avatarUrl: 'https://avatars.githubusercontent.com/u/126733545?v=4'
    }
  }
];

// Sample language distribution data
export const languageTrends = [
  { language: 'JavaScript', percentage: 28.4, repositories: 3750000 },
  { language: 'Python', percentage: 18.3, repositories: 2420000 },
  { language: 'Java', percentage: 12.1, repositories: 1600000 },
  { language: 'TypeScript', percentage: 9.7, repositories: 1280000 },
  { language: 'C++', percentage: 7.2, repositories: 950000 },
  { language: 'C#', percentage: 6.5, repositories: 860000 },
  { language: 'PHP', percentage: 5.8, repositories: 770000 },
  { language: 'Go', percentage: 4.3, repositories: 570000 },
  { language: 'Ruby', percentage: 3.5, repositories: 463000 },
  { language: 'Rust', percentage: 2.9, repositories: 383000 },
];
