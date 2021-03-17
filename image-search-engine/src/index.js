import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
//import getPhotos from './api';
import Gallery from './components/gallery';
import Preview from './components/preview';

class App extends React.Component {
  state = {
    photos: [],
    choosenImageIndex:null
  };

  savePhotos = (results) => {
    this.setState({ photos: results, choosenImageIndex:null });
  };

  previewImage = (idx) => {
    this.setState({choosenImageIndex:idx})
    
  }
  //   componentDidMount() {
  //     getPhotos().then((data) => {
  //       console.log(data.hits);
  //     });
  //   }

  render() {
    console.log(this.state);
    return (
      <>
        <SearchBar save={this.savePhotos} />

        {this.state.photos.length && this.state.choosenImageIndex !== null ?
          <Preview photoUrl={this.state.photos[this.state.choosenImageIndex].largeImageURL} /> : null}
        
          <Gallery preview={this.previewImage} photos={this.state.photos} />

      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
