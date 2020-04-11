import React from 'react';
import Cources from './courses';

const Student = ({name,number,courseNumber}) =>{
    
    let array = [];
    for (let i = 0 ; i < courseNumber ; i ++)
    {
        array[i]=i;
    }
   
    return (
    <div> 
    <p>Student <b>{name}</b> with student number : <b>{number}</b></p>
    { array.map((key,value)=> {return (<Cources courseNumber={key}/> ) })}
    </div>
        )
};

export default Student;
