import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { MainScreen } from "./screens/main";
import AllNews from "./screens/allnews";
import ErrorScreen from "./screens/error-screen";

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainScreen/>,
      errorElement:<ErrorScreen />
    },{
      path:'/all',
      element:<AllNews />
    } 
  ])
  return (
  <RouterProvider router={router} />
  );
};

export default App;