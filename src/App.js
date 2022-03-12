import './App.css';

import React, {useState, useEffect} from 'react';
import { Grid, Cell, FlexVideo } from 'react-foundation';
import Search from './components/search.js';
import Gallery from './components/gallery.js';
import Pagination from './components/pagination.js';

function fetchCaptions(query, setCaptions) {
  fetch('http://localhost:3000/captions.json?query=' + query)
  .then(response => response.json())
  .then(data => setCaptions(data));
}

function App() {
  
  const [captions, setCaptions] = useState([]);
  const [query, setQuery] = useState('');
  const [queryInput, setQueryInput] = useState('');
  const [pageN, setPageN] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState({'video_web_id': 'iHsb4lXXO9I', 'timestamp':'0'});
  
  useEffect(() => {
    setPageN(0);
    fetchCaptions(query, setCaptions);
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Captionly</h3>
        <Search query={query} setQuery={setQuery} queryInput={queryInput} setQueryInput={setQueryInput}/>
      </header>
      <Grid className='container'>
        <Cell className='vview' small={8} large={8}>
           <FlexVideo isWidescreen isVimeo>
              <iframe id={"ytplayer_" + selectedVideo.video_web_id}
                  type="text/html"
                  title={selectedVideo.video_web_id}
                  src={'https://www.youtube.com/embed/' + selectedVideo.video_web_id + '?autoplay=1&modestbranding=1&start=' + parseInt(selectedVideo.timestamp)}
                  frameBorder="0"
                  allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </FlexVideo>
            <Pagination pageN={pageN} setPageN={setPageN} total={Array.from(Array(Math.ceil(captions.length/16)).keys())} />
        </Cell>
        <Cell className='scrollableContent' small={4} large={4}><Gallery selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} captions={captions} pageN={pageN}/></Cell>
      </Grid>
    </div>
  );
}

export default App;
