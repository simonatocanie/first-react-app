import Home from "../components/Home/Home";
import Calculator from "../components/Calculator/Calculator";

export {}
 const routes=  [
    { path: '/', element:  <Home/> },
    { path: '/calculator',  element:  <Calculator/> }
  ];
export default routes;