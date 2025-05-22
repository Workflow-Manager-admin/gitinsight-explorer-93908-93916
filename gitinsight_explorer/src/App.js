import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';

/**
 * Main App component
 * 
 * Renders the MainContainer component which is the primary layout
 * for the GitInsight Explorer application
 */
function App() {
  return (
    <div className="app">
      <MainContainer />
    </div>
  );
}

export default App;