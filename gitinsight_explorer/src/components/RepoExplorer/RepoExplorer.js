import React from 'react';
import { repositories } from '../../data/mockData';

/**
 * RepoExplorer Component
 * 
 * Displays and allows searching/filtering of GitHub repositories
 */
const RepoExplorer = () => {
  return (
    <div className="repo-explorer">
      <div className="section-header">
        <h1>Repository Explorer</h1>
        <p className="section-description">
          Discover and analyze popular GitHub repositories
        </p>
      </div>

      <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search repositories..." 
        />
        <button className="btn search-btn">Search</button>
      </div>

      <div className="repo-list">
        {repositories.map(repo => (
          <div className="repo-card" key={repo.id}>
            <div className="repo-header">
              <img 
                src={repo.owner.avatarUrl} 
                alt={`${repo.owner.login}'s avatar`} 
                className="avatar-small" 
              />
              <h3 className="repo-title">{repo.fullName}</h3>
            </div>
            <p className="repo-description">{repo.description}</p>
            <div className="repo-stats">
              <div className="stat">
                <span className="stat-label">⭐ Stars:</span> 
                <span className="stat-value">{repo.stars.toLocaleString()}</span>
              </div>
              <div className="stat">
                <span className="stat-label">🍴 Forks:</span> 
                <span className="stat-value">{repo.forks.toLocaleString()}</span>
              </div>
              <div className="stat">
                <span className="stat-label">💻 Language:</span> 
                <span className="stat-value">{repo.language}</span>
              </div>
            </div>
            <div className="repo-topics">
              {repo.topics.map(topic => (
                <span className="topic-tag" key={topic}>{topic}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoExplorer;
