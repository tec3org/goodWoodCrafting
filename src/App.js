import './App.css';
import NewJobForm from './Components/NewJobForm'
import Jobs from './Components/Jobs'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import JobList from './Components/JobList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Jobs />
        <Switch>
          <Route exact path='/' component={JobList} />
          <Route exact path='/NewJob' component={NewJobForm} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
