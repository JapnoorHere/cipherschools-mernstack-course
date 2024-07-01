// // import { Component } from "react";
// import ToDoScreen from "./screens/ToDoScreen";



// //Functional componenet
// const App=()=>{
//   return <ToDoScreen/>
// }

// export default App;

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

const router = createBrowserRouter([
  {
    path:"/login", element: <LoginScreen/>,

  },
])

const App = ()=>{
  return <RouterProvider router={router}/>
}

export default App;