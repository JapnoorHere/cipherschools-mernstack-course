import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const router = createBrowserRouter([
  {path: "/login", element: <LoginScreen/>},
  {path:"/signup",  element: <SignUpScreen/>,},
  {path:"/student",  element: <h1>Student Page</h1>,},
  {path:"/librarian",  element: <h1>Libraray Page</h1>,},
])

function App() {
  return <RouterProvider  router={router}/>
}

export default App;
