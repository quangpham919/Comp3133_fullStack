import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/student';
import College from './components/college';

function App() {
  return (
    <>
    <Student name="Quang Pham" number="21" courseNumber="1" />
    <Student name="Leo Messi" number="10" courseNumber = "2" />
    <Student name="Cristiano Ronaldo" number="7" courseNumber = "3"/>
    <Student name="James Bond" number="101001" courseNumber = "4"/>
    <College name="George Brown" location ="Santiago Bernabeu"/>
    </>
  );
}

export default App;
