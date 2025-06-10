import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(

  createRoutesFromElements(
  
    <Route path="/" element={ <MainLayout/> }>

      <Route index element={ <HomePage/> }/>
      <Route path="/login" element={ <LoginPage/> }/>
      <Route path="*" element={ <NotFoundPage/> } />
      
    </Route>

  )

);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App