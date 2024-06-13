
import React, { useState } from 'react';
import usemyStore from '../Store/mystore';
import '../components/Header.css';

function Header() {
  const [username, setUsername] = useState('enter Username');
  const { fetchUserData, clearUserData } = usemyStore();

  const handleSearch = (event) => {
    event.preventDefault();
    if (username) {
      clearUserData();
      fetchUserData(username);
    }
  };

  return (
    <div className='header'>
      <div className="title">
        <h1>GITHUB FINDER</h1>
      </div>
      <div className="by">
        By <a href="https://github.com/KATAMII">Katamii</a>
      </div>
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder='Enter a Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
