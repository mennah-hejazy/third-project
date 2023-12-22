import './App.css'; 
import { RouterProvider, Route, createBrowserRouter , createRoutesFromElements} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Review from './Review';
import Services from './Services';
import Layout from './Layout';

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/services' element={<Services/>}/>
      </Route>    
    )
  )  
function App(){

  return( 
    <RouterProvider router={routes}/>
  );
}

export default App;

