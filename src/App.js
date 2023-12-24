import './App.css';
import Homepage from './Homepage';
import Auth from './Auth';
import Questions from './Questions';
import AskQuestions from './AskQuestions/AskQuestions';
import DisplayQuestions from './Questions/DisplayQuestions';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import Tags from './Tags/Tags';
import Users from './Users/Users';
import { fetchAllUsers } from './actions/users';
import UserProfile from './UserProfile/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Homepage />),
  },
  {
    path: "/Auth",
    element: (<Auth />),
  },

  {
    path: "/Questions",
    element: (<Questions />),
  },
  {
    path: "/Questions/:id",
    element: (<DisplayQuestions />),
  },
  {
    path: "/AskQuestions",
    element: (<AskQuestions />),
  },
  {
    path: "/Tags",
    element: (<Tags />),
  },
  {
    path: "/Users",
    element: (<Users />),
  },
  {
    path: "/Users/:id",
    element: (<UserProfile />),
  },
]);


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
