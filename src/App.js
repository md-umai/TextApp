import React from 'react';
import  ReactDOM from 'react-dom';
import Navbar from './Components/Navbar';
import './index.css';
import TextForm from './Components/TextForm';


const App = () => {
  return (
    <>
    <Navbar/>
    <div className='container my-3'>
    <TextForm title='Enter the text to analyze'/>
    </div>
    
    </>
  )
}

export default App;

// import React, { useState } from 'react';

// const App = () => {

//   const state = useState();
//   const [count, setCount] = useState(0);

//   const incNum = () =>{
//     setCount(count - 1);

//   }
//   return(
//     <>
//     <div className='container'>
//     <h1> {count} </h1>
//     <button onClick={incNum}>Click Me</button>
      
//       </div>    
//     </>

//   );
// };
// export default App;