import React from 'react';
import results from './result.css'

  export default function Result (props) {
 
 
    return (
      <>
      <hr/>
       <span  > 
       <div className='divi'>
        <h5> {props.method}      {props.url} </h5>
       
      </div>
      
       </span>
      </>
    );
  
}