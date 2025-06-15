import ReactDOM from 'react-dom/client';
import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';
import theme from './theme/theme';
import App from './App';


ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
