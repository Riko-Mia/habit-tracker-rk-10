import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";
import { routes } from './routers/routes.jsx';
import AuthProvider from './Context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      {<RouterProvider router={routes}/>}
    </AuthProvider>
  </StrictMode>,
)



// ReactDOM.createRoot(root).render(
//   <RouterProvider router={router} />,
// );