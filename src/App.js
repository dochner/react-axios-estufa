import React from 'react';
import './App.css';
import ContentsList from './Components/ContentsList'
import ContentsEdit from './Components/ContentsEdit'

function App() {
  return (
    <div className="App">
      <ContentsList />
      <ContentsEdit />
    </div>
  );
}

export default App;
