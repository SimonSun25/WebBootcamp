import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div>
    <h2>Homepage</h2>
    <Link to="/viewer">Card Viewer</Link>
    <br />
    <Link to="/editor">Card Editor</Link>
  </div>
);

export default Homepage;