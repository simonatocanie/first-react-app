import Home from "../components/Home/Home";
import Calculator from "../components/Calculator/Calculator";
import Expenses from "../components/Expenses/Expenses";

const routes = [
  { path: '/', element: <Home /> },
  { path: '/calculator', element: <Calculator /> },
  { path: '/expenses', element: <Expenses /> },
];

export default routes;