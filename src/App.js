import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals'  />
      <RowPost title='Action' isSmall />
    </div>

  );
}

export default App;
