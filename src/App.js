import React, {useState} from 'react';
import Header from './components/Header';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/Footer';

function App() {
const [currentPage, setCurrentPage] = useState('About') ;

const renderPage = (page) => {
  switch (page) {
    case 'Skills/Experience':
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
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
    {
      renderPage(currentPage)
    }
    <Footer></Footer>
    </div>
  );
}

export default App;
