import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Signin from './routes/sign-in/sigin-in.component';
import Contact from './routes/contact/contact.component';

const App = () => {

  const Shop = () => {

    return (
      <div>
        <div><h1>Shop page</h1></div>
      </div>
    ) 

  }

  return (
    // <Routes> = enable routing
    // <Route path='' element=> = if path matches, show element
    <Routes>  
        <Route path='/' element={ <Navigation /> } >
          <Route index element={ <Home />} /> 
          <Route path='/shop/' element={ <Shop />} /> 
          <Route path='/contact/' element={ <Contact />} /> 
          <Route path='/signin/' element={ <Signin />} /> 
        </Route>
    </Routes>
  
  );
}

export default App;
