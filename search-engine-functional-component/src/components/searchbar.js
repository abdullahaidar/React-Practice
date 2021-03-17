import React, { useState } from 'react';
import getPhotos from '../api';

const SearchBar = (props) => {
  const initState = {
    searchInput: '',
  };

  const [state, setState] = useState(initState);

  const searchBtn = () => {
    getPhotos(state.searchInput).then((data) => {
      console.log(data);
      props.save(data.hits);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="input-group mb-3 mt-3 ">
          <div className="input-group-prepend">
            <button
              onClick={searchBtn}
              className="btn btn-outline-secondary"
              type="button"
            >
              {' '}
              Search{' '}
            </button>
          </div>
          <input
            value={state.searchInput}
            onChange={(e) => {
              setState({ searchInput: e.target.value });
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
};

export default SearchBar;
