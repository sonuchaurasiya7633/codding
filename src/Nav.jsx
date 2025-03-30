import React from 'react';
import { Link } from 'react-router-dom';

const menus = [
  { Label: 'Home', Path: '/' },
  { Label: 'Image', Path: '/image' },
  { Label: 'Movies', Path: '/movies' },
  { Label: 'Videos', Path: '/videos' },
  { Label: 'Contact Us', Path: '/contact-us' },
];

const Nav = () => {
  return (
    <nav
      style={{
        width: '100%',
        height: '60px',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        margin:25,
        borderBottom: '3px solid red',
      }}
    >
      <ul
        style={{
          listStyle: 'none', 
          display: 'flex',
          justifyContent: 'space-evenly',  
          alignItems: 'center',
          width: '100%',
          margin: 0,
          padding: 0,
        }}
      >
        {menus.map((menu, index) => (
          <li key={index}>
            <Link
              to={menu.Path}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '10px 15px',
                borderRadius: '5px',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = 'red')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              {menu.Label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;