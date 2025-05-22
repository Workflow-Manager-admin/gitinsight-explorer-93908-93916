import React from 'react';
import { trendingRepos, languageTrends } from '../../data/mockData';

/**
 * TrendView Component
 * 
 * Displays trending repositories and development trends on GitHub
 */
const TrendView = () => {
  return (
    <div className="trend-view">
      <div className="section-header">
        <h1>GitHub Trends</h1>
        <p className="section-description">
          Discover trending repositories and development trends
        </p>
      </div>
      
      <div className="trends-container">
        <div className="trend-section trending-repos">
          <h2>Trending Repositories Today</h2>
          
          <div className="trending-list">
            {trendingRepos.map((repo, index) => (
              <div className="trending-card" key={index}>
                <div className="trending-header">
                  <img 
                    src={repo.owner.avatarUrl} 
                    alt={`${repo.owner.login}'s avatar`} 
                    className="avatar-small" 
                  />
                  <h3>{repo.fullName}</h3>
                </div>
                <p className="trending-description">{repo.description}</p>
                <div className="trending-stats">
                  <div className="trend-stat">
                    <span className="trend-stat-label">Language:</span> 
                    <span className="trend-stat-value">{repo.language}</span>
                  </div>
                  <div className="trend-stat">
                    <span className="trend-stat-label">Total Stars:</span> 
                    <span className="trend-stat-value">{repo.stars.toLocaleString()}</span>
                  </div>
                  <div className="trend-stat highlight">
                    <span className="trend-stat-label">Stars Today:</span> 
                    <span className="trend-stat-value">+{repo.starsToday}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trend-section language-distribution">
          <h2>Programming Language Distribution</h2>
          
          <div className="language-stats">
            {languageTrends.map((lang, index) => (
              <div className="language-item" key={index}>
                <div className="language-info">
                  <span className="language-name">{lang.language}</span>
                  <span className="language-percentage">{lang.percentage}%</span>
                </div>
                <div className="language-bar-container">
                  <div 
                    className="language-bar" 
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
                <div className="language-repos">
                  {lang.repositories.toLocaleString()} repositories
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendView;
