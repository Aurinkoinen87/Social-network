import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Navbar} from './components/Navbar'
import {Content} from './components/Content'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
