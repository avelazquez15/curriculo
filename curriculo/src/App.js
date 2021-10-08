import './App.css';
import TimelinePage from "./pages/timelinePage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">

            <TimelinePage/>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
