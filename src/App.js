import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Contact from './routes/contact/contact.component';
import Shop from './components/shop/shop.component';

const App = () => {
  
  return (
    // <Routes> = enable routing
    // <Route path='' element=> = if path matches, show element
    <Routes>  
        <Route path='/' element={ <Navigation /> } >
          <Route index element={ <Home />} /> 
          <Route path='/shop/' element={ <Shop />} /> 
          <Route path='/contact/' element={ <Contact />} /> 
          <Route path='/auth/' element={ <Authentication />} /> 
        </Route>
    </Routes>
  
  );
}

export default App;
