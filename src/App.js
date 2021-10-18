import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';





function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
