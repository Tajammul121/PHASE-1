import React from 'react'
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
   <div className="App">
    <Header />
    <div className="f-heading">
      <h1>Features</h1>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </div>
    <Features />
    <Services />
    <Subscribe />
    <Footer />
   </div>
  );
}

export default App;
