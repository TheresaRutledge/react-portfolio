import React, {useState} from 'react';

function Header(props) {
  const navTabs = ['About', 'Projects', 'Contact', 'Resume'];

  return (
    <div className='header'>
      <h1>Theresa Rutledge</h1>
      <ul className="list">
        {navTabs.map(tab => (
          <li className={`${props.currentPage===tab ? 'list-item navActive' : 'list-item'}`} key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.setCurrentPage(tab)}
              className='list-item'
              // {
              //   props.currentPage === tab ? 'list-item active' : 'nav-link'
              // }
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
