import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToDo from './component/toDo'
import Navbarfun from "./component/navbar/navbar"
import './App.css';
import Transaction from './component/transaction/transaction';
import Home from './component/home/home';
function App() {
  return (
    <div className="App">
       <Router>
         <Navbarfun/>
           <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/todo" exact component={ToDo}/>
              <Route path="/transaction" exact component={Transaction}/>
           </Switch>
       </Router>
    </div>
  );
}

export default App;
