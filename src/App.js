import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
