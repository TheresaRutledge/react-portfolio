import React, {useEffect} from 'react';

function Header(props) {
  const navTabs = ['About', 'Projects', 'Contact', 'Resume'];

  useEffect(() => {
    document.title = `Theresa Rutledge - ${props.currentPage}`;
  })

  return (
    <div className='header'>
      <h1 className='header-title'>Theresa Rutledge</h1>
      <ul className="list nav">
        {navTabs.map(tab => (
          <li className={`${props.currentPage===tab ? 'list-item navActive nav-item' : 'list-item nav-item'}`} key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.setCurrentPage(tab)}
              className='list-item'
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
