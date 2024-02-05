import { useState } from 'react';

const Search = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      {/* <h1>Search</h1> */}
      <div className="search">
        <div style={{ width: '60px' }}></div>
        <input
          onKeyDownCapture={async (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSubmit(searchValue)
            }
          }}
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={() => onSubmit(searchValue)}>Submit</button>
      </div>
    </>
  );
};

export default Search;
