import logo from './logo.svg';
import './App.css';
import BillingContainer from './containers/BillingContainer';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
    <div className="App">
    <HeaderContainer />
        <Switch>
           
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/cart" component={BillingContainer}/>
          </Switch>
     </div>
</BrowserRouter>
  );
}

export default App;
