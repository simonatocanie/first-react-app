import Navbar from "./components/Common/Navbar/Navbar";
import { useRoutes } from "react-router-dom";
import routes from './data/routes';


function App() {
  const routesArray = useRoutes(routes);

  return <div className="App">
    <Navbar />
    {routesArray}
  </div>;
}

export default App;
