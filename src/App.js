import React from 'react';
import Main from './components/Main'
import Navigation from './components/Navigation'
import './App.css';

function App() {
  return (
      <div className="foreground">
        <div className="main-body">
          <Navigation />
          <Main />
        </div>
      </div>
  );
}
export default App;
