import React from 'react';

function Header(props) {
  const navTabs = ['About', 'Projects', 'Contact', 'Resume'];
  return (
    <div className='header'>
      <h1>Theresa Rutledge</h1>
      <ul className="list">
        {navTabs.map(tab => (
          <li className="list-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.setCurrentPage(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
