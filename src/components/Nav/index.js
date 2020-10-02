import React from 'react';

function Nav(props) {
  const navTabs = ['About', 'Projects', 'Contact','Resume'];
  return (
    <ul className="nav nav-tabs">
      {navTabs.map(tab => (
        <li className="nav-item" key={tab}>
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
  );
}

export default Nav;
