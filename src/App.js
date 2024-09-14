// import logo from './logo.svg';
// import './App.css';
// import Button from './Button';

// function App() {
//   return (
//     <div className="App">
//    <Button></Button>
//     </div>
//   );
// }

// export default App;

// import Student from './Student'
// import React from 'react'

// export default function App() {
//   return (
//     <div>
//      <Student name="hari" gender="M" age={21} isStudent={true}></Student> 
//      <Student  name="Shyam" gender="F" age={13} isStudent={false}></Student> 
//      <Student  name="Govind" gender="M" age={15} isStudent={true}></Student> 
//      <Student  name="mukund" gender="M" age={35} isStudent={true}></Student> 
//      <Student></Student>
//     </div>
//   )
// };

// import React from 'react'
// import UserGreeting from './UserGreeting'

// export default function App() {
//   return (
//     <div>
//       <UserGreeting isLoggedIn={false} name="Hari" age={21}></UserGreeting>

//       <UserGreeting isLoggedIn={true} name="SHYAM" age={17}></UserGreeting>

//       <UserGreeting isLoggedIn={true} name="Krishna" age={13}></UserGreeting>
//     </div>
//   )
// }
  

// import React from 'react'
// import Render from './Render'
// export default function App() {
//   return (
//     <div>
//       <Render></Render>
//     </div>
//   )
// }

// import React from 'react'
// import Render from './Render'

// export default function App() {
//   return (
//     <div>
//       <Render></Render>
//       <Render></Render>
      
//     </div>
//   )
// }

// import React from 'react'
// import List from './List';
// export default function App() {

//   const fruits_list = [{id:1,name:"BlueBerry",calories:121,abc:true},
//     {id:1,name:"Apple",calories:1,abc:true},
//       {id:2,name:"Mango",calories:11,abc:false},
//         {id:3,name:"Banana",calories:1,abc:false},
//           {id:4,name:"Guava",calories:110,abc:true},
//             {id:5,name:"Grapes",calories:122,abc:true},
//             {id:6,name:"Pomegranate",calories:121,abc:false}

// ];

// const vegs_list = [
//   {id:7,name:"Berry",calories:121,abc:true},
//     {id:8,name:"Potato",calories:1,abc:true},
//       {id:9,name:"Carrot",calories:11,abc:false},
//         {id:10,name:"soya",calories:1,abc:false},
//           {id:11,name:"Peas",calories:110,abc:true},
//             {id:12,name:"LadyFinger",calories:122,abc:true},
//             {id:13,name:"Tomato",calories:121,abc:false}
// ];

//   return (
//     <div>
//       <List list={fruits_list}></List>
//       <List list={vegs_list}></List>
//     </div>
//   )
// }

// import React from 'react'
// import NewButton from './NewButton'
// export default function App() {
//   return (
//     <div>
//       <NewButton></NewButton>
//     </div>
//   )
// }

// import React from 'react'
// import MyComponent from './MyComponent'
// export default function App() {
//   return (
//     <div>
//       <MyComponent></MyComponent>
//     </div>
//   )
// }
import React from 'react'
import Counter from './Counter'

export default function App() {
  return (
    <div>
  <Counter></Counter>      
    </div>
  )
}
