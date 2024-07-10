import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import AddBookScreen from './screens/AddBookScreen';
import BookScreen from './screens/BookScreen';
import BookIssueForm from './screens/BookIssueForm';
import BookIssueScreen from './screens/BookIssueScreen';

const router = createBrowserRouter([
  {path: "/login", element: <LoginScreen/>},
  {path:"/signup",  element: <SignUpScreen/>,},
  {path:"/",  element: <HomeScreen/>,},
  {path:"/add-book",  element: <AddBookScreen/>,},
  {path:"/books",  element: <BookScreen/>,},
  {path:"/book-issue",  element: <BookIssueForm/>,},
  {path:"/book-issue-list",  element: <BookIssueScreen/>,},

  // {path:"/student",  element: <StudentHomeScreen/>,},
  // {path:"/librarian",  element: <LibrarianHomeScreen/>,},
])

function App() {
  return <RouterProvider  router={router}/>
}

export default App;
