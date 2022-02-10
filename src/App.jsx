import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css'
import Header from './Header';
import TaskManager from './TaskManager/TaskManager'
import Calculator from "./Calculator/Calculator"
import TaskListContextProvider from "./TaskManager/TaskListContext"
import StopWatch from "./StopWatch/StopWatch";
import Weather from "./Weather/Weather";
import CurrencyConverter from "./CurrencyConverter/CurrencyConverter";

const App = () => {
  return (
    
    <TaskListContextProvider>
        <Router >
            <div className="container">
            <div className="pattern"></div>

                <Header/>
                <div className="app-wrapper">
                <Switch>
                <Route exact path='/' component={TaskManager} />
                <Route exact path="/calculator" component={Calculator} />
                <Route exact path="/stopwatch" component={StopWatch} />
                <Route exact path="/weather" component={Weather} />
                <Route exact path="/currency" component={CurrencyConverter} />
                </Switch>
                
            </div>
        </div>
        <footer> Petruk Yaroslav 2022</footer>
        </Router >
        </TaskListContextProvider>
    
  )

}

export default App
