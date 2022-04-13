import React, { useState } from "react";
// import About from './components/About';
// import ContactForm from './components/Contact';
import Header from './components/Header';
// import Portfolio from './components/Portfolio';
// import Project from './components/Project';
// import Resume from './components/Resume';

function App() {

  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'portfolio of projects',
    },
    {
      name: 'Resume',
      description: 'list of skills and link to resume',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
        <Header 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {/* <About /> */}
        {/* <Contact /> */}
        <section>Portfolio
          {/* <Project /> */}
        </section>
        {/* <Resume /> */}
      </main>
    </div>
  );
}

export default App;
