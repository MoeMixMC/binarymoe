import React from 'react';
import Section1 from './SectionComponents/section1.js'
import Section2 from './SectionComponents/section2.js'
import Section3 from './SectionComponents/section3.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <main class="wrapper">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      </main>
    </div>
  );
}

export default App;
