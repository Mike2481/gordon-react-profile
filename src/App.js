// import all components
import React, { useState } from 'react';
import Nav from '../src/components/Header';
import About from '../src/components/About';
import Portfolio from '../src/components/Portfolio';
import Contact from '../src/components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

export default function PortfolioContainer() {
  // sets initial page state to about
  const [currentPage, setCurrentPage] = useState('About');
  // renders component based off which "link" is clicked
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };
// function used to handle page change based off clicked link
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='main-container'>
      <div>
        {/* displays navigation and the selected page (about by default) */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <div className='footer'>
        {/* renders footer with icons */}
        <Footer />
      </div>
    </div>
  );
}

