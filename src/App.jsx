import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {Header,Footer} from './Home'
// import Contact from './Contact'
import Myapp from './Myapp'


function App () {

  return(
    
    <Myapp></Myapp>
  )
}
export default App

// function App() {
//   const [count, setCount] = useState(0);

//   const Max = () => {
//     setCount(count + 1);
//   };
//   const Min = () => {
//     if(count >= 1){
//       setCount(count - 1);
//     }
//   };
//   return (

//     <div>
//       <h1>{count}</h1>
//       <button onclick={Max}>Max</button>
//       <button onclick={Min}>Min</button>
//     </div>

//     );
//   }
//   export default App


    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>


    // <div>
    //     <Header/>
    //     <Footer/>
    // </div>


//        <div>
//          <Contact st={ {color:"red"} } id={  ["Ramshad","Rahul"]  } name="teacher"/>
//          <div>
//            <p>some contents</p>
//          </div>
//          <Contact st={ {color:"blue"} } id={  ["Prathyanth","Shinad "]  } name="student"/>
//        </div>

