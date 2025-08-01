import Directors from './pages/Directors';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Movies from './pages/Movie';
import Errorpage from "./pages/Errorpage"

const routes = [
  {
    path: "/",
    element: <Home/>,
    errorElement: <Errorpage />
  },
  {
    path: "/directors",
    element: <Directors/>,
  },
  {
    path: "/actors",
    element: <Actors/>,
  },
  {
    path: "/movies",
    element: <Movies/>,
  }
];

export default routes;