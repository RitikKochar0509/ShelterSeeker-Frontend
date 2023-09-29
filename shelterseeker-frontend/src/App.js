import React from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import MainPage from './components/MainPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CardDescription from './components/CardDescription';
import { Provider } from 'react-redux';
import store from './utils/store';

const appRouter = createBrowserRouter([{
  path:'/',
  element : <MainPage/>,
  children:[
    {
      path:'/',
      element:<Filter/>
    },
  ]
   
},
{
  path:'property',
  element:<CardDescription/>
},
{
  path:'explore',
  element:<CardDescription/>
}

]);
function App() {
  return (
    <Provider store = {store}>
    <div> 
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
