import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
// import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
// import { QueryClient, QueryClientProvider } from 'react-query';

// const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <QueryClientProvider client={queryClient}> */}
    <Provider store={store}>
    <App />
    </Provider>
    {/* <ReactQueryDevtools/> */}
    {/* </QueryClientProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
