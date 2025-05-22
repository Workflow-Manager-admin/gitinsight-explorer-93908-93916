import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './MainContainer.css';

// Importing placeholder components that will be created later
import RepoExplorer from '../RepoExplorer/RepoExplorer';
import UserProfile from '../UserProfile/UserProfile';
import TrendView from '../TrendView/TrendView';

/**
 * MainContainer - Primary layout component for GitInsight Explorer
 * 
 * This component provides the main structure of the application, including:
 * - Navigation bar with the app logo and main navigation links
 * - Sidebar for additional filtering and options
 * - Main content area that changes based on the selected route
 * - Responsive design that works on different screen sizes
 */
const MainContainer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="gitinsight-container">
        {/* Header/Navigation Bar */}
        <header className="main-header">
          <div className="logo-container">
            <span className="logo-symbol">*</span>
            <span className="logo-text">GitInsight Explorer</span>
          </div>

          <nav className="main-nav">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              Repositories
            </NavLink>
            <NavLink 
              to="/users" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Users
            </NavLink>
            <NavLink 
              to="/trends" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Trends
            </NavLink>
          </nav>

          <div className="header-actions">
            <button className="btn">Sign In with GitHub</button>
          </div>
        </header>

        {/* Main Content Area with Sidebar */}
        <div className="content-wrapper">
          {/* Sidebar */}
          <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              {sidebarOpen ? '◀' : '▶'}
            </button>
            <div className="sidebar-content">
              <h3>Filters</h3>
              <div className="filter-group">
                <label>Language</label>
                <select className="filter-select">
                  <option value="all">All Languages</option>
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="go">Go</option>
                  <option value="rust">Rust</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Sort By</label>
                <select className="filter-select">
                  <option value="stars">Stars</option>
                  <option value="forks">Forks</option>
                  <option value="updated">Last Updated</option>
                  <option value="created">Recently Created</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Time Range</label>
                <select className="filter-select">
                  <option value="day">Last 24 hours</option>
                  <option value="week">Last week</option>
                  <option value="month">Last month</option>
                  <option value="year">Last year</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<RepoExplorer />} />
              <Route path="/users" element={<UserProfile />} />
              <Route path="/trends" element={<TrendView />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <footer className="main-footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} GitInsight Explorer - Powered by KAVIA AI</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default MainContainer;
