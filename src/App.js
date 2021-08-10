
import GlobalStyle from "./helpers/Global/GlobalStyle";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
    <GlobalStyle/>
     <Router>
       <Switch>
         <Route path="" exact component = {Home} />
       </Switch>
     </Router>
    </>
  );
}

export default App;
