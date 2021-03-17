import React from 'react';
import getPhotos from '../api'

class SearchBar extends React.Component {
  state = {
    searchInput: '',
  };

  searchBtn = () => {
    //create API method
    // call API method to do the search
      getPhotos(this.state.searchInput).then(data => {
          console.log(data);
          this.props.save(data.hits)
      })
  };

  render() {
    //console.log(this.state.searchInput); //testing

    return (
      <div className="container">
        <div className="row">
          <div className="input-group mb-3 mt-3 ">
            <div className="input-group-prepend">
              <button
                onClick={this.searchBtn}
                className="btn btn-outline-secondary"
                type="button"
              >
                {' '}
                Search{' '}
              </button>
            </div>{' '}
            <input
              value={this.state.searchInput}
              onChange={(e) => {
                this.setState({ searchInput: e.target.value });
              }}
              type="text"
              className="form-control"
              placeholder="Search Word"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
