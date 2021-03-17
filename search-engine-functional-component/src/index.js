import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery';
import SearchBar from './components/searchbar';
import Preview from './components/preview';

const App = () => {
  /*
  another way to se state separately 
  const initState = {
    photos: [],
    choosenImageIndex: null,
  };
  const [state, setState] = useState(initState);
    //const [photos, setPhotos] = useState([]);
    //const [choosenImageIndex, setChoosenImageIndex] = useState(null);
  previewImage = (idx) => {
    setState({ ...state, choosenImageIndex: idx });
    //setChoosenImageIndex(idx)
  };
  savePhotos = (results) => {
    setState({ photos: results, choosenImageIndex: null });
    //setPhotos(results)
    //setChoosenImageIndex(null)
  };
  */
  const initState = {
    photos: [],
    choosenImageIndex: null,
  };

  const [state, setState] = useState(initState);

  const savePhotos = (results) => {
    setState({ photos: results, choosenImageIndex: null });
  };

  const previewImage = (index) => {
    // class component setState will change only the property you are targeting inside the curly brackets
    //but in functional component SetState will override the complete old state

    setState({ ...state, choosenImageIndex: index });
  };

  // console.log(state);
  return (
    <>
      <SearchBar save={savePhotos} />

      {state.photos.length && state.choosenImageIndex !== null ? (
        <Preview
          photoUrl={state.photos[state.choosenImageIndex].largeImageURL}
        />
      ) : null}

      <Gallery photos={state.photos} preview={previewImage} />
    </>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
