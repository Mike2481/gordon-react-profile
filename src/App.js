// import React from "react";
// // import About from './components/About';
// import ContactForm from './components/Contact';
// import Header from './components/Header';
// // import Portfolio from './components/Portfolio';
// // import Project from './components/Project';
// // import Resume from './components/Resume';

// function App() {

//   return (
//     <div>
//         <Header></Header>
//       <main>
//         {/* <About /> */}
//         <ContactForm />
//         {/* <Portfolio /> */}
//         {/* <Resume /> */}
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Nav from '../src/components/Header';
import About from '../src/components/About';
import Portfolio from '../src/components/Portfolio';
import Contact from '../src/components/Contact';
import Resume from './components/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
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

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

