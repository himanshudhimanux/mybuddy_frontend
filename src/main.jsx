import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import AppRoutes from "./routes/AppRoutes";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { store } from './redux/store.js'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(

    <StrictMode>
      <Provider store={store}>
      
      <AppRoutes />
      </Provider>
    </StrictMode>

)
