import React, {useState} from 'react';
import Nav from './components/Nav';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

function App() {
const [currentPage, setCurrentPage] = useState('About') ;

const renderPage = (page) => {
  switch (page) {
    case 'Resume':
      return <Resume />;
    case 'Projects':
      return <Projects />;
    case 'Contact':
      return <Contact />
    default:
      return <About/>;

  }
};

  return (
    <div>
    <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
    {
      renderPage(currentPage)
    }
    </div>
  );
}

export default App;
