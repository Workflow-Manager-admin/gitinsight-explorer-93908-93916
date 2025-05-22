import React from 'react';
import { users } from '../../data/mockData';

/**
 * UserProfile Component
 * 
 * Displays and allows searching/filtering of GitHub users
 */
const UserProfile = () => {
  return (
    <div className="user-profiles">
      <div className="section-header">
        <h1>GitHub Users</h1>
        <p className="section-description">
          Explore profiles and contributions of GitHub users
        </p>
      </div>

      <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search users..." 
        />
        <button className="btn search-btn">Search</button>
      </div>

      <div className="user-list">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <div className="user-avatar">
              <img src={user.avatarUrl} alt={`${user.login}'s avatar`} />
            </div>
            <div className="user-info">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-login">@{user.login}</p>
              {user.bio && <p className="user-bio">{user.bio}</p>}
              
              <div className="user-details">
                {user.location && (
                  <div className="detail">
                    <span className="detail-icon">📍</span> {user.location}
                  </div>
                )}
                {user.company && (
                  <div className="detail">
                    <span className="detail-icon">🏢</span> {user.company}
                  </div>
                )}
                {user.blog && (
                  <div className="detail">
                    <span className="detail-icon">🔗</span> {user.blog}
                  </div>
                )}
              </div>

              <div className="user-stats">
                <div className="stat">
                  <span className="stat-value">{user.followers.toLocaleString()}</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{user.following.toLocaleString()}</span>
                  <span className="stat-label">Following</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{user.publicRepos.toLocaleString()}</span>
                  <span className="stat-label">Repositories</span>
                </div>
              </div>
              
              <div className="top-repos">
                <h4>Top Repositories:</h4>
                {user.topRepositories.map((repo, index) => (
                  <div className="mini-repo" key={index}>
                    <span className="mini-repo-name">{repo.name}</span>
                    <span className="mini-repo-stars">⭐ {repo.stars.toLocaleString()}</span>
                    {repo.language && <span className="mini-repo-lang">{repo.language}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
