import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,comedy,documentary,horror,originals,romance} from './urls'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost urls={originals} title='Netflix Originals'  />
      <RowPost urls={action} title='Action' isSmall />
      <RowPost urls={comedy} title='Comedy' isSmall />
      <RowPost urls={documentary} title='Documentaries' isSmall />
      <RowPost urls={horror} title='Horror' isSmall />
      <RowPost urls={romance} title='Romance' isSmall />
    </div>

  );
}

export default App;
