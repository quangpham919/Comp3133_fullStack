import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Greeter from './Greeter';
import LikedButton from './LikedButton';

const Display = () =>{
  const element = [1,2,3,4,5,6,7,8,9,10];
    return(
      <> 
      <Greeter/>
      {element.map((element,i)=>{ return <li key={i}> <LikedButton/>  </li> })}
      </>
    )
}

ReactDOM.render(
 <Display />,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
