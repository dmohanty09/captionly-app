import './App.css';

import React, {useState, useEffect} from 'react';
import Search from './components/search.js';
import Gallery from './components/gallery.js';

function fetchCaptions(query, setCaptions) {
  fetch('http://localhost:3000/captions.json?query=' + query)
  .then(response => response.json())
  .then(data => setCaptions(data));
}

function App() {
  
  const [captions, setCaptions] = useState([]);
  const [query, setQuery] = useState('');
  const [queryInput, setQueryInput] = useState('');
  
  useEffect(() => {
    fetchCaptions(query, setCaptions);
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Captionly</h1>
        <Search query={query} setQuery={setQuery} queryInput={queryInput} setQueryInput={setQueryInput}/>
      </header>
      <Gallery captions={captions}/>
    </div>
  );
}

export default App;
