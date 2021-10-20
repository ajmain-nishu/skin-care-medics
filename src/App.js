import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Services from './components/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound'
import Contact from './components/Home/Contact/Contact';
import Doctor from './components/Doctor/Doctor';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Gallery from './components/Gallery/Gallery';
import Service from './components/Service/Service';





function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/services">
            <Service></Service>
          </PrivateRoute>
          <PrivateRoute exact path="/service/gallery">
            <Gallery></Gallery>
          </PrivateRoute>
          <PrivateRoute exact path="/service/:serviceId">
            <Services></Services>
          </PrivateRoute>
          <Route path="/register">
            <Registration></Registration>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/doctor">
            <Doctor></Doctor>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}



export default App;